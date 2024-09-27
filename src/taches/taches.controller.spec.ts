import { Test, TestingModule } from '@nestjs/testing';
import { TachesController } from './taches.controller';
import { TachesService } from './taches.service';
import { CreateTacheDto } from './dto/tache.dto';


describe('TachesController', () => {
  let controller: TachesController;
  let service: TachesService;

  const mockTache = {
    titre: 'Test Tache',
    description: 'Description de la tache',
    complete: false,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TachesController],
      providers: [
        {
          provide: TachesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockTache]),
            create: jest.fn().mockResolvedValue(mockTache),
            update: jest.fn().mockResolvedValue(mockTache),
            delete: jest.fn().mockResolvedValue(mockTache),
          },
        },
      ],
    }).compile();

    controller = module.get<TachesController>(TachesController);
    service = module.get<TachesService>(TachesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of tasks', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockTache]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should create a task', async () => {
    const createTacheDto: CreateTacheDto = {
      titre: 'New Tache',
      description: 'New Description',
      complete: false,
    };

    const result = await controller.create(createTacheDto);
    expect(result).toEqual(mockTache);
    expect(service.create).toHaveBeenCalledWith(createTacheDto);
  });

  it('should update a task', async () => {
    const updateTacheDto: CreateTacheDto = {
      titre: 'Updated Tache',
      description: 'Updated Description',
      complete: true,
    };

    const result = await controller.update('1', updateTacheDto);
    expect(result).toEqual(mockTache);
    expect(service.update).toHaveBeenCalledWith('1', updateTacheDto);
  });

  it('should delete a task', async () => {
    const result = await controller.delete('1');
    expect(result).toEqual(mockTache);
    expect(service.delete).toHaveBeenCalledWith('1');
  });
});
