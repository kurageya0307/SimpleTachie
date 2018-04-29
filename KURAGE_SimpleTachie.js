//=============================================================================
// プラグインの説明
// KURAGE_SimpleTachie.js
// 作成者     : KURAGE
// 作成日     : 2018/04/29
// 最終更新日 : 2018/04/29
// バージョン : v1.0.0
//=============================================================================

//=============================================================================
/*:
 * @plugindesc v1.0.0 シンプルな立ち絵と名前ウィンドウを表示します。
 * @author KURAGE
 *
 * @param --- ピクチャ関係基本設定 ---
 * @desc コメント文
 *
 * @param LeftManPictureId
 * @desc 左に立つ人物のピクチャ番号
 * @default 100
 *
 * @param LeftManAdjustX
 * @desc 左に立つ人物のX座標の微調整量
 * @default 0
 *
 * @param LeftManAdjustY
 * @desc 左に立つ人物のY座標の微調整量
 * @default 0
 *
 * @param RightManPictureId
 * @desc 右に立つ人物のピクチャ番号
 * @default 99
 *
 * @param RightManAdjustX
 * @desc 右に立つ人物のX座標の微調整量
 * @default 0
 *
 * @param RightManAdjustY
 * @desc 右に立つ人物のY座標の微調整量
 * @default 0
 *
 * @param DeltaX
 * @desc 立ち絵のイン・アウト時に移動する量
 * @default 20
 *
 * @param InDuration
 * @desc 立ち絵のインの時間（フレーム単位）
 * @default 30
 *
 * @param OutDuration
 * @desc 立ち絵のアウトの時間（フレーム単位）
 * @default 30
 *
 * @param --- キャラクター名 ---
 * @desc コメント文
 *
 * @param CharacterName_01
 * @desc "立ち絵01"のキャラ名を設定
 *
 * @param CharacterName_02
 * @desc "立ち絵02"のキャラ名を設定
 *
 * @param CharacterName_03
 * @desc "立ち絵03"のキャラ名を設定
 *
 * @param CharacterName_04
 * @desc "立ち絵04"のキャラ名を設定
 *
 * @param CharacterName_05
 * @desc "立ち絵05"のキャラ名を設定
 *
 * @param CharacterName_06
 * @desc "立ち絵06"のキャラ名を設定
 *
 * @param CharacterName_07
 * @desc "立ち絵07"のキャラ名を設定
 *
 * @param CharacterName_08
 * @desc "立ち絵08"のキャラ名を設定
 *
 * @param CharacterName_09
 * @desc "立ち絵09"のキャラ名を設定
 *
 * @param CharacterName_10
 * @desc "立ち絵10"のキャラ名を設定
 *
 * @param CharacterName_11
 * @desc "立ち絵11"のキャラ名を設定
 *
 * @param CharacterName_12
 * @desc "立ち絵12"のキャラ名を設定
 *
 * @param CharacterName_13
 * @desc "立ち絵13"のキャラ名を設定
 *
 * @param CharacterName_14
 * @desc "立ち絵14"のキャラ名を設定
 *
 * @param CharacterName_15
 * @desc "立ち絵15"のキャラ名を設定
 *
 * @param CharacterName_16
 * @desc "立ち絵16"のキャラ名を設定
 *
 * @param CharacterName_17
 * @desc "立ち絵17"のキャラ名を設定
 *
 * @param CharacterName_18
 * @desc "立ち絵18"のキャラ名を設定
 *
 * @param CharacterName_19
 * @desc "立ち絵19"のキャラ名を設定
 *
 * @param CharacterName_20
 * @desc "立ち絵20"のキャラ名を設定
 *
 * @help 
 *
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 立ち絵と名前ウィンドウを表示します。
 * あまり高度な使い方ができませんが，
 * シンプルで簡単に立ち絵表示が可能です。
 * 
 *-----------------------------------------------------------------------------
 * 使用方法
 *-----------------------------------------------------------------------------
 * ○事前準備
 * ・プラグインパラメータの設定
 * 　プラグインパラメータの「CharacterName_XX」にキャラ名を設定します。
 *
 * ・画像の用意
 * 　img/picturesのフォルダ内に「CharacterName_XX」で設定したキャラ名と
 * 　同じ名前の画像を用意します。
 * 　例えば，CharacterName_00に「ハロルド」と登録した場合，
 * 　「ハロルド.png」をimg/picturesのフォルダ内に用意します。
 *
 * ○立ち絵の表示
 * 　イベントコマンド「文章の表示」にて文章の先頭に「\tl<キャラ名>」と入力してください。
 * 　すると，立ち絵画像と名前のウィンドウが画面左に表示されます。
 * 
 * 　また，「\tr<キャラ名>」と入力した場合，立ち絵と名前のウィンドウが
 * 　画面右に表示されます。
 * 　（tlおよびtrはそれぞれ，Tachie Left, Tachie Rightの略です。）
 * 
 * ○立ち絵の消去
 * 　プラグインコマンドで「KST アウト」と入力することで
 * 　全ての立ち絵を消去できます。
 *
 * 　また，左右どちらかの立ち絵のみを消去したい場合は
 * 　「KST 左アウト」「KST 右アウト」で消去できます。
 *
 * 　コマンドの「KST」と引数の「アウト」他の間には半角スペースを入力してください。
 *
 *-----------------------------------------------------------------------------
 * 本プラグインのライセンスについて(License)
 *-----------------------------------------------------------------------------
 * 本プラグインはMITライセンスのもとで公開しています。
 * This plugin is released under the MIT License.
 * 
 * Copyright (c) 2017 Y.K
 * http://opensource.org/licenses/mit-license.php
 * 
 *-----------------------------------------------------------------------------
 * 変更来歴
 *-----------------------------------------------------------------------------
 * 
 * v1.0.0 - 2018/04/29 : 初版作成
 * 
 *-----------------------------------------------------------------------------
*/
//=============================================================================

"use strict";

var Imported = Imported || {};
Imported["KURAGE_SimpleTachie"] = "1.0.1";

var KURAGE = KURAGE || {};
KURAGE.SimpleTachie = {};

(function($) {
    $.params = PluginManager.parameters('KURAGE_SimpleTachie');

    //-----------------------------------------------------------------------------
    // Plugin global variables
    //
    $.character_names = [];
    for(var i=1; i<21; i++) {
        var key = "CharacterName_" + String(("0"+i).slice(-2));
        $.character_names.push($.params[key]);
    }
    $.left_man_picture_id  = Number($.params["LeftManPictureId"]);
    $.left_man_adjust_x    = Number($.params["LeftManAdjustX"]);
    $.left_man_adjust_y    = Number($.params["LeftManAdjustY"]);
    $.right_man_picture_id = Number($.params["RightManPictureId"]);
    $.right_man_adjust_x   = Number($.params["RightManAdjustX"]);
    $.right_man_adjust_y   = Number($.params["RightManAdjustY"]);
    $.delta_x              = Number($.params["DeltaX"]);
    $.in_duration          = Number($.params["InDuration"]);
    $.out_duration         = Number($.params["OutDuration"]);

    //-----------------------------------------------------------------------------
    // Global variables
    //
    $.The_last_left_man  = "";
    $.The_last_right_man = "";
    $.Left_man_exists  = false;
    $.Right_man_exists = false;

    //-----------------------------------------------------------------------------
    // プラグインコマンド
    //
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
         _Game_Interpreter_pluginCommand.call(this, command, args);
         if (command == "KST") {
             switch(args[0]) {
                 case "アウト":
                     $.hideTachie(true, true);
                     break;
                 case "左アウト":
                     $.hideTachie(true, false);
                     break;
                 case "右アウト":
                     $.hideTachie(false, true);
                     break;
             }
         }
    };

    //=============================================================================
    // Window_Name_Box
    //=============================================================================
    
    function Window_Name_Box() {
        this.initialize.apply(this, arguments);
    }
    
    Window_Name_Box.prototype = Object.create(Window_Base.prototype);
    Window_Name_Box.prototype.constructor = Window_Name_Box;
    
    Window_Name_Box.prototype.initialize = function(parentWindow) {
        this._parentWindow = parentWindow;
        Window_Base.prototype.initialize.call(this, 0, 0, 240, this.windowHeight());
        this._text = '';
        this._lastNameText = '';
        this._openness = 0;
        this._closeCounter = 0;
        this.deactivate();
        this.hide();
    };
    
    Window_Name_Box.prototype.windowWidth = function() {
        this.resetFontSettings();
        var dw = this.textWidthEx(this._text);
        dw += this.padding * 2;
        var width = dw + this.standardPadding() * 4;
        return Math.ceil(width);
    };
    
    Window_Name_Box.prototype.textWidthEx = function(text) {
        return this.drawTextEx(text, 0, this.contents.height);
    };
    
    Window_Name_Box.prototype.calcNormalCharacter = function(textState) {
        return this.textWidth(textState.text[textState.index++]);
    };
    
    Window_Name_Box.prototype.windowHeight = function() {
        return this.fittingHeight(1);
    };
    
    Window_Name_Box.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        if (this.active) return;
        if (this.isClosed()) return;
        if (this.isClosing()) return;
        if (this._closeCounter-- > 0) return;
        if (this._parentWindow.isClosing()) {
          this._openness = this._parentWindow.openness;
        }
        this.close();
    };
    
    Window_Name_Box.prototype.refresh = function(text, position) {
        this.show();
        this._lastNameText = text;
        this._text = text;
        this._position = position;
        this.width = this.windowWidth();
        this.createContents();
        this.contents.clear();
        this.resetFontSettings();
        var padding = this.standardPadding() * 2;
        this.drawTextEx(this._text, padding, 0, this.contents.width);
        this.adjustPositionX();
        this.adjustPositionY();
        this.open();
        this.activate();
        this._closeCounter = 4;
        return '';
    };
    
    Window_Name_Box.prototype.adjustPositionX = function() {
        if (this._position === 1) {
          this.x = this._parentWindow.x;
          //this.x += eval($.MSGNameBoxBufferX);
        } else {
          this.x = this._parentWindow.x + this._parentWindow.width;
          this.x -= this.width;
          //this.x -= eval($.MSGNameBoxBufferX);
        }
        this.x = this.x.clamp(0, Graphics.boxWidth - this.width);
    };
    
    Window_Name_Box.prototype.adjustPositionY = function() {
        if ($gameMessage.positionType() === 0) {
          this.y = this._parentWindow.y + this._parentWindow.height;
          //this.y -= eval($.MSGNameBoxBufferY);
        } else {
          this.y = this._parentWindow.y;
          this.y -= this.height;
          //this.y += eval($.MSGNameBoxBufferY);
        }
        if (this.y < 0) {
          this.y = this._parentWindow.y + this._parentWindow.height;
          //this.y -= eval($.MSGNameBoxBufferY);
        }
    };
    
    //=============================================================================
    // Window_Message
    //=============================================================================
    
    var Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;
    Window_Message.prototype.createSubWindows = function() {
        Window_Message_createSubWindows.call(this);
        this._nameWindow = new Window_Name_Box(this);
        $.nameWindow = this._nameWindow;
        var scene = SceneManager._scene;
        scene.addChild(this._nameWindow);
    };
    
    var Window_Message_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        this._nameWindow.deactivate();
        Window_Message_startMessage.call(this);
    };
    
    var Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function() {
        this._nameWindow.deactivate();
        Window_Message_terminateMessage.call(this);
    };
    
    Window_Message.prototype.convertEscapeCharacters = function(text) {
        text = Window_Base.prototype.convertEscapeCharacters.call(this, text);
        text = this.convertNameBox(text);
        return text;
    };
    
    Window_Message.prototype.convertNameBox = function(text) {
        text = text.replace(/\x1bTL\<(.*?)\>/gi, function() {
            $.showTachie(arguments[1], true);
            return $.nameWindow.refresh(arguments[1], 1);
        }, this);
        text = text.replace(/\x1bTR\<(.*?)\>/gi, function() {
            $.showTachie(arguments[1], false);
            return $.nameWindow.refresh(arguments[1], 5);
        }, this);
        return text;
    };
    
    //=============================================================================
    // Global functions
    //=============================================================================
    $.showTachie = function(name, show_in_left) {
        if($.character_names.indexOf(name)===-1){
            $.focusOff();
            return;
        }

        var char_name = $.character_names[ $.character_names.indexOf(name) ];
        var ori_x, ori_y, target_x, target_y;
        if(show_in_left) {
            $.focusLeft();
            if($.The_last_left_man===name) {
                return;
            }
            ori_x    = -1 * $.delta_x + $.left_man_adjust_x;
            ori_y    = $.left_man_adjust_y;
            target_x = $.left_man_adjust_x;
            target_y = $.left_man_adjust_y;

            $gameScreen.showPicture($.left_man_picture_id, char_name, 0, ori_x, ori_y, 100, 100, 0, 0);
            $gameScreen.movePicture($.left_man_picture_id, 0, target_x, target_y, 100, 100, 255, 0, $.in_duration);

            $.The_last_left_man = name;
        }else{
            $.focusRight();
            if($.The_last_right_man===name) {
                return;
            }
            ori_x    = $.delta_x + Graphics.width + $.right_man_adjust_x;
            ori_y    = $.right_man_adjust_y;
            target_x = Graphics.width + $.right_man_adjust_x;
            target_y = $.right_man_adjust_y;

            $gameScreen.showPicture($.right_man_picture_id, char_name, 0, ori_x, ori_y, -100, 100, 0, 0);
            $gameScreen.movePicture($.right_man_picture_id, 0, target_x, target_y, -100, 100, 255, 0, $.in_duration);

            $.The_last_right_man = name;
        }
    }
    
    $.focusLeft = function() {
        $gameScreen.tintPicture($.left_man_picture_id,  [  0,   0,   0, 0], 10);
        $gameScreen.tintPicture($.right_man_picture_id, [-68, -68, -68, 0], 10);
    }
    $.focusRight = function() {
        $gameScreen.tintPicture($.left_man_picture_id,  [-68, -68, -68, 0], 10);
        $gameScreen.tintPicture($.right_man_picture_id, [  0,   0,   0, 0], 10);
    }
    $.focusOff = function() {
        $gameScreen.tintPicture($.left_man_picture_id,  [-68, -68, -68, 0], 10);
        $gameScreen.tintPicture($.right_man_picture_id, [-68, -68, -68, 0], 10);
    }

    $.hideTachie = function(hide_left, hide_right) {
        var target_x, target_y;
        if(hide_left) {
            target_x = -1 * $.delta_x + $.left_man_adjust_x;
            target_y = $.left_man_adjust_y;

            $gameScreen.movePicture($.left_man_picture_id, 0, target_x, target_y, 100, 100, 0, 0, $.out_duration);
            //$gameScreen.erasePicture($.left_man_picture_id);
            $.The_last_left_man  = "";
        }
        if(hide_right){
            target_x = $.delta_x + Graphics.width + $.right_man_adjust_x;
            target_y = $.right_man_adjust_y;

            $gameScreen.movePicture($.right_man_picture_id, 0, target_x, target_y, -100, 100, 0, 0, $.out_duration);
            //$gameScreen.erasePicture($.right_man_picture_id);
            $.The_last_right_man = "";
        }
    }
    
})(KURAGE.SimpleTachie);
