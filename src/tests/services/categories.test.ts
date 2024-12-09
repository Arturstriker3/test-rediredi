import { describe, it, expect, vi, Mock } from 'vitest';
import categoriesService from '@/core/services/categories';
import axiosInstance from '@/core/api/axios';
import apiService from "@/core/api/api-service";
import { ICategories } from "@/core/interfaces/categories.interface";

const urlBase = apiService.categories;

vi.mock('@/core/api/axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('Categories Service', () => {
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
