import { Test, TestingModule } from '@nestjs/testing';
import { TachesService } from './taches.service';
import { getModelToken } from '@nestjs/mongoose';
import { Tache } from './tache.schema';
import { Model } from 'mongoose';

describe('TachesService', () => {
  let service: TachesService;
  let model: Model<Tache>;

  const mockTacheModel = {
    find: jest.fn(),
    exec: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TachesService,
        {
          provide: getModelToken(Tache.name),
          useValue: mockTacheModel,
        },
      ],
    }).compile();

    service = module.get<TachesService>(TachesService);
    model = module.get(getModelToken(Tache.name));
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('findAll', () => {
    it('should return an array of taches', async () => {
      const result = [{ title: 'Test Tache 1' }, { title: 'Test Tache 2' }];
      
      // Mock the return value for the find method to return an object with an exec method
      (model.find as jest.Mock).mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue(result),
      });

      expect(await service.findAll()).toBe(result);
      expect(model.find).toHaveBeenCalledTimes(1);
    });
  });
});
