import { MockedFunction } from 'vitest';

declare global {
  const vi: {
    fn: typeof vi.fn;
    spyOn: typeof vi.spyOn;
    mockResolvedValue: MockedFunction<any>;
    mockRejectedValue: MockedFunction<any>;
  };
}
