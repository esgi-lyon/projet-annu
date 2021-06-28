import { InjectionToken } from "@decorators/di";
import { Provider } from "@decorators/di/lib/src/types";

/**
 * Transform a js object to container field with injection token or simple key
 */
export default (vars: object, useInjectionToken = false): Provider[] =>
  Object.entries(vars).map(
    ([k, v]): Provider => ({
      provide: useInjectionToken ? new InjectionToken(k) : k,
      useValue: v,
    })
  );
