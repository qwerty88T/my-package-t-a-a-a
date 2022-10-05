'use babel';

import MyPackageTAAAView from './my-package-t-a-a-a-view';
import { CompositeDisposable } from 'atom';

export default {

  myPackageTAAAView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.myPackageTAAAView = new MyPackageTAAAView(state.myPackageTAAAViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.myPackageTAAAView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'my-package-t-a-a-a:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.myPackageTAAAView.destroy();
  },

  serialize() {
    return {
      myPackageTAAAViewState: this.myPackageTAAAView.serialize()
    };
  },

  toggle() {
    console.log('MyPackageTAAA was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
