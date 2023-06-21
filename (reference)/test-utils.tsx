/**
 * @file Import this file in place of the React Testing Library
 * to include application-specific providers and utilities
 *
 * @example
 * ```diff
 * - import { cleanup, render, screen } from '@testing-library/react';
 * + import { cleanup, render, screen } from '~/utils/test-utils';
 * ```
 */

/* eslint-disable import/no-extraneous-dependencies */

import { RenderResult, render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
// import { WithTranslation } from 'next-i18next';
import { RouterContext } from "next/dist/shared/lib/router-context";
import type { NextRouter } from "next/router";
import React from "react";
// import { Provider as ReduxProvider } from 'react-redux';
import "@testing-library/jest-dom/extend-expect";

// As a basic setup, import your same slice reducers
// import { AppStore, RootState, makeStore } from '~/store';

/**
 * This type interface extends the default options for {@link render} from RTL,
 * and adds configuration options for our own providers
 *
 * @see {@link RenderOptions}
 */
// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: PreloadedState<RootState>;
//   router?: Partial<NextRouter>;
//   store?: AppStore;
// }

// export const mockNextRouter: NextRouter = {
//   asPath: '/',
//   back: jest.fn(() => Promise.resolve(true)),
//   basePath: '',
//   beforePopState: jest.fn(),
//   events: {
//     emit: jest.fn(),
//     off: jest.fn(),
//     on: jest.fn(),
//   },
//   isFallback: false,
//   isLocaleDomain: false,
//   isPreview: false,
//   isReady: true,
//   pathname: '/',
//   prefetch: jest.fn(() => Promise.resolve()),
//   push: jest.fn(() => Promise.resolve(true)),
//   query: {},
//   reload: jest.fn(() => Promise.resolve(true)),
//   replace: jest.fn(() => Promise.resolve(true)),
//   route: '/',
// };

/**
 * Create a wrapper for the application providers
 *
 * @example
 * renderHook(
 *   () => useHookWithStore(),
 *   { wrapper: makeWrapper({ store }) }
 * );
 *
 * @example
 * render(
 *   <MyComponentWithStore />,
 *   { wrapper: makeWrapper({ store }) }
 * );
 */
// export const makeWrapper =
//   ({
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = makeStore({}, preloadedState),
//     router,
//   }: Pick<
//     ExtendedRenderOptions,
//     'preloadedState' | 'store' | 'router'
//   >): ExtendedRenderOptions['wrapper'] =>
//   ({ children }: React.PropsWithChildren) => {
//     const routerContext = React.useMemo(
//       () => ({ ...mockNextRouter, ...router }),
//       []
//     );

//     return (
//       <RouterContext.Provider value={routerContext}>
//         <ReduxProvider store={store}>
//           <ThemeProvider>
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               {children}
//             </LocalizationProvider>
//           </ThemeProvider>
//         </ReduxProvider>
//       </RouterContext.Provider>
//     );
//   };

/**
 * Custom test render with application dependency providers
 *
 * @see {@link render @testing-library/react/render}
 *
 * @example
 * ### Override the router
 * ```ts
 * const { baseElement } = render(<MyComponent />, {
 *   router: { pathname: '/my-custom-pathname' },
 * });
 * ```
 *
 * ### Override the store
 * ```ts
 * const { baseElement } = render(<MyComponent />, {
 *   preloadedState: { study: { ... } },
 * });
 * ```
 */
// function customRender(
//   ui: React.ReactElement,
//   {
//     router,
//     preloadedState,
//     store,
//     wrapper,
//     ...options
//   }: ExtendedRenderOptions = {}
// ): RenderResult {
//   return render(ui, {
//     wrapper: wrapper || makeWrapper({ store, router, preloadedState }),
//     ...options,
//   });
// }

// export const mockTranslationProps: WithTranslation = {
//   t: jest.fn((key) => key),
//   i18n: {} as WithTranslation['i18n'],
//   tReady: true,
// };

// re-export everything from RTL so we can just use this file instead
export * from "@testing-library/react";

// override render method
// export { customRender as render };
