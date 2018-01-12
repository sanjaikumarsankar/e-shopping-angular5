import { CmsStateService } from '../store/services/cms-state.service';


export function startupServiceFactory(cmsStateService: CmsStateService): Function {
  return () => {
    return cmsStateService.loadCMS();
  };
}
