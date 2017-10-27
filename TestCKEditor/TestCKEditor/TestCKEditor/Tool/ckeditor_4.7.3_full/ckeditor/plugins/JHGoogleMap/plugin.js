/*https://docs-old.ckeditor.com/ckeditor_api/symbols/CKEDITOR.dialog.html*/

(function () {

    CKEDITOR.plugins.add('JHGoogleMap', {
        //requires: "GoogleMap",

        init: function (editor) {
            editor.addCommand('JHGoogleMap', new CKEDITOR.dialogCommand('JHGoogleMap'));//定義dialog，也就是下面的code

            editor.ui.addButton('GoogleMap', {
                label: '自訂GoogleMap',
                icon: './plugins/JHGoogleMap/icons/if_google-plus_1819415.svg',
                command: 'JHGoogleMap',

            });//定義button的名稱及圖片,以及按下後彈出的dialog


            CKEDITOR.dialog.add('JHGoogleMap', function (editor) {

                var textStyle = 'width:150px;height:30px';

                var model = {
                    title: '自訂GoogleMap',
                    minWidth: 250,
                    minHeight: 250,
                    contents: [{
                        id: 'GoogleMapControl',
                        label: '自訂GoogleMap',
                        title: '自訂GoogleMap',
                        elements: [
                            {
                                id: 'mapAddress',
                                type: 'text',
                                label: '請輸入地址',
                            },
                            {
                                id: 'mapWidth',
                                type: 'text',
                                label: '地圖寬度',
                                'default': '425'
                            },

                            {
                                id: 'mapHeight',
                                type: 'text',
                                label: '地圖高度',
                                'default': '350'
                            },

                        ]

                    }],
                    buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton],
                    onOk: function () {
                        // "this" is now a CKEDITOR.dialog object.
                        // Accessing dialog elements:

                        var address = this.getValueOf('GoogleMapControl', 'mapAddress');
                        var width = this.getValueOf('GoogleMapControl', 'mapWidth');
                        var height = this.getValueOf('GoogleMapControl', 'mapHeight');



                        var strElement = '<div>';
                        strElement += '<iframe width="' + width + '" height="' + height + '"';
                        strElement += 'frameborder = "0" scrolling= "no" marginheight= "0" marginwidth= "0"';
                        strElement += 'src = "http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=' + address + '&z=16&output=embed&t=" ></iframe > '
                        strElement += '</div>'


                        var elementStyle = {
                            position: 'relative',
                            display: 'inline-block'
                        };

                        //建立Dom元素
                        var element = CKEDITOR.dom.element.createFromHtml(strElement);
                            
                        element.setStyles(elementStyle)

                        var fakeElement = editor.createFakeElement(element, 'cke_iframe', 'iframe', true);

                        editor.insertElement(element);

                    },
                    onCancel: function () {
                        //alert('我取消囉');
                    }
                };


                return model;

            });
        },



    })

})();


/* 參考網址
https://dotblogs.com.tw/lastsecret/2010/09/28/17935
*/

/* Javascript Ajax 地址轉經緯度

   var RequestMapUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + address;
   var xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function () {

        if (this.readyState == '4' && this.status == '200') {

            ar result = JSON.parse(this.responseText);

                  if (result) {

                       var loactionArr = result.results;
                       var location = loactionArr[0].geometry.location;

                                }

                            }
                        };

                        xhttp.open("GET", RequestMapUrl, true);
                        xhttp.send();


*/