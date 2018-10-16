import { ListTypeModule } from './list-type.module';

describe('ListTypeModule', () => {
  let listTypeModule: ListTypeModule;

  beforeEach(() => {
    listTypeModule = new ListTypeModule();
  });

  it('should create an instance', () => {
    expect(listTypeModule).toBeTruthy();
  });
});
