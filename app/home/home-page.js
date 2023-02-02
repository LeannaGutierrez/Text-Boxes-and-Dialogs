import { Dialogs, getViewById } from '@nativescript/core';

export function onSubmit(args) {
  var button = args.object;
  var parent = button.parent;

  if(parent)
  {
    var TxtView = getViewById(parent, "msg"); 
    if(TxtView) 
    {
      Dialogs.alert("Your message" + TxtView.text + "has been sent"); 
    }
  }
}
