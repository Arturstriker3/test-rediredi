import { describe, it, expect, vi, Mock } from 'vitest';
import categoriesService from '@/core/services/categories';
import axiosInstance from '@/core/api/axios';
import apiService from "@/core/api/api-service";
import { ICategories } from "@/core/interfaces/categories.interface";
import { v4 as uuidv4 } from 'uuid';

const urlBase = apiService.categories;

vi.mock('@/core/api/axios', () => ({
  default: {
    get: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
    post: vi.fn(),
  },
}));

describe('Categories GET', () => {
  it('should call categories get method URL', async () => {
    const mockResponse: { data: ICategories[] } = {
      data: [
        {
          id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Category 1',
          hasChildren: true,
        },
        {
          id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'Category 2',
          hasChildren: false,
        },
      ],
    };

    (axiosInstance.get as Mock).mockResolvedValue(mockResponse);

    const response = await categoriesService.get();

    expect(axiosInstance.get).toHaveBeenCalledWith(`${urlBase}`);
    expect(response).toEqual(mockResponse);
  });
});

describe('Categories POST', () => {
  it('should call patch method with correct URL and data', async () => {
    const newName = 'Updated Category Name';
    const categoryId = uuidv4();

    const mockResponse = { data: { id: categoryId, name: newName } };

    (axiosInstance.patch as Mock).mockResolvedValue(mockResponse);

    const response = await categoriesService.patch(newName, categoryId);

    expect(axiosInstance.patch).toHaveBeenCalledWith(
      `${urlBase}/${categoryId}`,
      { name: newName }
    );
    expect(response).toEqual(mockResponse);
  });
});

describe('Categories DELETE', () => {
  it('should call delete method with the correct URL', async () => {
    const categoryId = uuidv4();

    const mockResponse = { data: { message: 'Category deleted successfully' } };

    (axiosInstance.delete as Mock).mockResolvedValue(mockResponse);

    const response = await categoriesService.delete(categoryId);

    expect(axiosInstance.delete).toHaveBeenCalledWith(`${urlBase}/${categoryId}`);
    expect(response).toEqual(mockResponse);
  });
});

describe('Categories POST', () => {
  it('should call post method with correct URL and data', async () => {
    const name = 'New Category';
    const mockResponse = { data: { id: '123', name: name } };

    (axiosInstance.post as Mock).mockResolvedValue(mockResponse);

    const response = await categoriesService.post(name);

    expect(axiosInstance.post).toHaveBeenCalledWith(
      `${urlBase}`,
      { name }
    );
    expect(response).toEqual(mockResponse);
  });
});

describe('Categories POST Children', () => {
  it('should call postChildren method with correct URL and data', async () => {
    const name = 'New Child Category';
    const parentId = 'parent-123';
    const mockResponse = { data: { id: 'child-123', name, parent: { id: parentId } } };

    (axiosInstance.post as Mock).mockResolvedValue(mockResponse);

    const response = await categoriesService.postChildren(name, parentId);

    expect(axiosInstance.post).toHaveBeenCalledWith(
      `${urlBase}`,
      {
        parent: { id: parentId },
        name: name,
      }
    );
    expect(response).toEqual(mockResponse);
  });
});

describe('Categories GET Childrens', () => {
  it('should call getChildrens method with correct URL', async () => {
    const categoryId = 'category-123';
    const mockResponse = { data: ['child-1', 'child-2'] };

    (axiosInstance.get as Mock).mockResolvedValue(mockResponse);

    const response = await categoriesService.getChildrens(categoryId);

    expect(axiosInstance.get).toHaveBeenCalledWith(`${urlBase}/${categoryId}`);
    expect(response).toEqual(mockResponse);
  });
});