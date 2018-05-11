$(function() {

    var json =
            [{
                "name": "Python",
                "code": "p_1",
                "icon": "icon-th",
                "child": [
                    {"name": "Python基础","icon": "icon-minus-sign","code": "p_11","parentCode": "p_1",
                        "child": [
                            {"name": "01_初进python","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/01.html","exp": "10","child": []},
                            {"name": "02_数字类型","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/02.html","exp": "10","child": []},
                            {"name": "03_字符串","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/03.html","exp": "10","child": []},
                            {"name": "04_索引切片","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/04.html","exp": "10","child": []},
                            {"name": "05_列表list","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/05.html","exp": "10","child": []},
                            {"name": "06_可变不可变类型","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/06.html","exp": "10","child": []},
                            {"name": "07_元祖,字典,集合","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/07.html","exp": "10","child": []},
                            {"name": "08_不可变集合frozenset","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/08.html","exp": "10","child": []},
                            {"name": "09_python赋值机制","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/09.html","exp": "10","child": []},
                            {"name": "10_条件判断,循环","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/10.html","exp": "10","child": []},
                            {"name": "11_列表推导式","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/11.html","exp": "10","child": []},
                            {"name": "12_函数","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/12.html","exp": "10","child": []},
                            {"name": "13_模块包导入","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/13.html","exp": "10","child": []},
                            {"name": "14_异常","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/14.html","exp": "10","child": []},
                            {"name": "15_文件读写","code": "","icon": "","parentCode": "p_11","url": "./link/pythonjob/base/15.html","exp": "10","child": []},
                        ]
                    },
                    {
                        "name": "Python进阶","icon": "","code": "p_12","parentCode": "p_1",
                        "child": [
                            {"name": "01_sys,os系统交互模块","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/01.html","exp": "10","child": []},
                            {"name": "02_csv读写","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/02.html","exp": "10","child": []},
                            {"name": "03_正则匹配模块re","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/03.html","exp": "10","child": []},
                            {"name": "04_时间日期datetime模块","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/04.html","exp": "10","child": []},
                            {"name": "05_参数传递，高阶函数，匿名函数","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/05.html","exp": "10","child": []},
                            {"name": "06_迭代器iter()","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/06.html","exp": "10","child": []},
                            {"name": "07_生成器generator()","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/07.html","exp": "10","child": []},
                            {"name": "08_with上下文管理器 @contextlib","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/08.html","exp": "10","child": []},
                            {"name": "09_装饰器 @generator","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/09.html","exp": "10","child": []},
                            {"name": "10_修饰符","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/10.html","exp": "10","child": []},
                            {"name": "11_operator, functools, itertools模块","code": "","icon": "","parentCode": "p_12","url": "./link/pythonjob/pro/11.html","exp": "10","child": []},
                        ]
                    },
                    {
                        "name": "Python练习","icon": "","code": "p_13","parentCode": "p_1",
                        "child": [
                            {"name": "猜数游戏","code": "","icon": "","parentCode": "p_13","url": "./link/pythonjob/base/game_guess.html","exp": "10","child": []},
                            {"name": "密码验证","code": "","icon": "","parentCode": "p_13","url": "./link/pythonjob/exam/01.html","exp": "10","child": []},
                            {"name": "字符出现最多次数","code": "","icon": "","parentCode": "p_13","url": "./link/pythonjob/exam/02.html","exp": "10","child": []},
                            {"name": "返回排除非唯一列表","code": "","icon": "","parentCode": "p_13","url": "./link/pythonjob/exam/03.html","exp": "10","child": []},
                            {"name": "字符串查找","code": "","icon": "","parentCode": "p_13","url": "./link/pythonjob/exam/04.html","exp": "10","child": []},
                        ]
                    }
                ]
            }, {
                "name": "服务器",
                "code": "p_2",
                "icon": "icon-th",
                "child": [
                    {"name": "Ngnix","icon": "icon-minus-sign","code": "p_21","parentCode": "p_2",
                        "child": [
                            {"type": "1","name": "nginx下载安装","code": "","icon": "","parentCode": "p_21","url": "https://www.jianshu.com/p/103a47316545","exp": "10","child": []},
                            {"type": "1","name": "nginx常用命令","code": "","icon": "","parentCode": "p_21","url": "https://www.jianshu.com/p/c552501ee234","exp": "10","child": []},
                            {"type": "1","name": "nginx配置文件conf","code": "","icon": "","parentCode": "p_21","url": "https://www.jianshu.com/p/e5cbda3f0e56","exp": "10","child": []},
                            {"type": "1","name": "nginx常用配置","code": "","icon": "","parentCode": "p_21","url": "https://www.jianshu.com/p/3b6a0b5a7c37","exp": "10","child": []},
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
                if (data[i].type == "1") {
                    $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                        "<li data-name='" + data[i].code + "'>" +
                        "<span>" +
                        "<i class='" + data[i].icon + "'></i> " +
                        "<a href='" + data[i].url + "' target='_blank'>" +
                        data[i].name +
                        "</a>" +
                        "</span>" +
                        "</li>")
                } else {
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