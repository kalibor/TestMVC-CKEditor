/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    config.extraPlugins = 'youtube,uploadimage,image2,JHGoogleMap';

    config.toolbarGroups = [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['undo', 'clipboard'] },
        { name: 'links', groups: ['links','JHGoogleMap'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] },
       
   
    ];

    config.removeButtons = 'Save,NewPage,Preview,Print,Templates,Paste,Copy,Cut,Find,Replace,SelectAll,Scayt,Form,Checkbox,TextField,Radio,Textarea,Select,Button,ImageButton,HiddenField,BidiLtr,BidiRtl,Language,PageBreak,Flash,CopyFormatting,ShowBlocks';
};

