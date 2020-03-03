"use babel"

// Copyright 2019 Teros Tech
// Carlos Alberto Ruiz Naranjo, Ismael Pérez Rojo,
// Alfredo Enrique Sáez Pérez de la Lastra
//
// This file is part of TerosHDL.
//
// TerosHDL is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// TerosHDL is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with TerosHDL.  If not, see <https://www.gnu.org/licenses/>.

// import {$, CompositeDisposable} from "atom";
// import fs from 'fs';
// import path from 'path';
import DocumenterView from './dependencies-view'
const jsteros = require('jsteros');

function dependenciesView() {
  const editor = atom.workspace.getActiveTextEditor();
  const filename = editor.getPath();
  // if (editor) {
  //   if ( editor.getGrammar().scopeName =="source.vhdl" ){
  //     var lang = "vhdl";
  //     var symbol = atom.config.get("TerosHDL.documenter.vhdl-comment-symbol");
  //   }
  //   else if ( editor.getGrammar().scopeName =="source.verilog" ){
  //     var lang = "verilog"
  //     var symbol = atom.config.get("TerosHDL.documenter.verilog-comment-symbol")
  //   }
  //   else{
  //     atom.notifications.addInfo(`Please, select a valid file.`);
  //     return;
  //   }
    var str = editor.getText();
    this.view = new DocumenterView({
      filename: filename,
      str: str
    })
    atom.workspace.open(this.view,{split: 'right'})
    this.view.generate();
  // }
}

export {
  dependenciesView,
}