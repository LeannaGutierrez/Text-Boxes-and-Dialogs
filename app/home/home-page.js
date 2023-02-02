import { Frame } from '@nativescript/core';

export function Click() {
  var navigationEntry = {
    moduleName: './info/info-page',
    transition: {
      name: 'slideUp',
      duration: 1000,
    },
  };
  Frame.topmost().navigate(navigationEntry);
}
