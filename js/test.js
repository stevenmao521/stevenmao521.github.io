$(function () {

    var json =
        [{
            "name": "Python",
            "code":"p_1",
            "icon": "icon-th",
            "child": [
                {
                    "name": "Python基础",
                    "icon": "icon-minus-sign",
                    "code":"p_11",
                    "parentCode": "p_1",
                    "child": [
                        {
                            "name": "01_初进python",
                            "code":"",
                            "icon": "",
                            "parentCode": "p_11",
                            "child": [],
							"url": "./link/pythonjob/base/01.html",
							"exp": "20",
                        }
                    ]
                },
                {
                    "name": "Python进阶",
                    "icon": "",
                    "code":"p_12",
                    "parentCode": "p_1",
                    "child": [
                        {
                            "name": "北京中科慈航中城区分行",
                            "code":"",
                            "icon": "",
                            "parentCode": "p_12",
                            "child": []
                        }
                    ]
                }
            ]
        }, {
            "name": "Linux",
            "code":"p_2",
            "icon": "icon-th",
            "child": [
                {
                    "name": "广州中科科技",
                    "code":"GZZKKJ",
                    "icon": "icon-minus-sign",
                    "parentCode": "ZKKJ",
                    "child": [
                        {
                            "name": "广州天河中科科技",
                            "code":"GZTHZKKJ",
                            "icon": "",
                            "parentCode": "GZZKKJ",
                            "child": []
                        }
                    ]
                }
            ]
        }];


    function tree(data) {
        for (var i = 0; i < data.length; i++) {
            var data2 = data[i];
            if (data[i].icon == "icon-th") {
                $("#rootUL").append("<li data-name='" + data[i].code + "'><span><i class='" + data[i].icon + "'></i> " + data[i].name + "</span></li>");
            } else {
                var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                    "<li data-name='" + data[i].code + "'>" +
                    "<span>" +
                    "<i class='" + data[i].icon + "'></i> " +
					"<a href='" + data[i].url + "' target='iframe'>" +
                    data[i].name +
					"</a>" +
                    "</span>" +
                    "</li>")
            }
            for (var j = 0; j < data[i].child.length; j++) {
                var child = data[i].child[j];
                var children = $("li[data-name='" + child.parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + child.parentCode + "'] > ul").append(
                    "<li data-name='" + child.code + "'>" +
                    "<span>" +
                    "<i class='" + child.icon + "'></i> " +
                    child.name +
                    "</span>" +
                    "</li>")
                var child2 = data[i].child[j].child;
                tree(child2)
            }
            tree(data[i]);
        }

    }

    tree(json)


});