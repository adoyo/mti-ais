/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */
String.prototype.replaceAll = function (AFindText,ARepText){
    raRegExp = new RegExp(AFindText,"g");
    return this.replace(raRegExp,ARepText);
}

function auto() {
    var hash = location.hash;
    if (hash != '') {
        var target = convert_hash() + '()';
        eval(target);
    } else {
        index();
    }
}

//主菜单
function index() {
    render_list(index_list_data);
}

//msg菜单
function msg() {
    render_list(msg_list_data);
}

function msg_tx() {
    render_list(msg_tx_list_data);
}

function msg_rx() {
    render_list(msg_rx_list_data);
}

function msg_create() {
    render_list(msg_create_list_data);
}

function msg_create_set() {
    if (lastActive == 1) {
        location.hash = '#msg/create/set/msg/type';
    } else {
        location.hash = '#msg/create/set/msg';
    }
}

function msg_create_set_msg_type() {
    render_dbl_list(msg_create_set_msg_type_list_data);
}

function msg_create_set_msg_type_adrs() {
    render_select_list(msg_create_set_msg_type_adrs_list_data);
}

function msg_create_set_msg_type_mmsi() {
    render_num_list(msg_create_set_msg_type_mmsi_list_data);
}

function msg_create_set_msg() {
    render_dbl_list(msg_create_set_msg_list_data);
}

function internsal() {
    render_list(internsal_list_data);
}

function intial() {
    render_list(intial_list_data);
}

function channel() {
    render_list(channel_list_data);
}

function diagnostics() {
    render_list(diagnostics_list_data);
}

//检查是否有active存在
//用以判断上下键是否控制active选中项
function has_active() {
    var length = $('.active').length;
    if (length == 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * 将hash转成约定值
 * @param hash
 */
function convert_hash() {
    var hash = location.hash;
    if (hash == '') {
        return 'index';
    } else {
        var hash = hash.slice(1);
        return hash.replace(/\//g, '_');
    }
}

function get_Active_localName() {
    return $('.active')[0].localName;
}

function get_data() {
    var hash = convert_hash() + '_list_data';
    var data = window[hash];
    return data;
}

//enter事件
function enter() {
    if (renderType == 'select_list') {
        //获得当前选择项索引值->修改model中active对应值的值
        var select = $('.select').text();
        var hash = convert_hash() + '_list_data';
        var data = window[hash];
        var index = data.active - 1;
        set_msg_type_key_common[index] = select;
        menu();
    } else if (renderType == 'dbl_list') {
        var active = $('.active').last().parent().find('span').first().text().toLocaleLowerCase();
        var index = active.indexOf(' ');
        if (index != -1) {
            active = active.slice(0, index);
        }
        if (location.hash != '') {
            location.hash += '/' + active;
        } else {
            location.hash += active;
        }
    } else if (renderType == 'num_list') {
        menu();
    } else {
        lastActive = $('li').index($('.active'));
        var active = $('.active').text().toLowerCase();
        var index = active.indexOf(' ');
        if (index != -1) {
            active = active.slice(0, index);
        }
        if (location.hash != '') {
            location.hash += '/' + active;
        } else {
            location.hash += active;
        }
    }
}

//menu事件
function menu() {
    var hash = location.hash;
    if (hash == '#msg/create/set/msg/type' || hash == '#msg/create/set/msg') {
        location.hash = '#msg/create';
    } else if (hash != '') {
        var lastIndex = hash.lastIndexOf('/');
        if (lastIndex == -1) {
            location.hash = '';
        } else {
            location.hash = hash.slice(0, lastIndex);
        }
    }
}

//up事件
function up() {
    switch (renderType) {
        case 'list':
        case 'dbl_list':
            if (has_active()) {
                var hash = convert_hash() + '_list_data';
                var data = window[hash];
                if (data.active > 1) data.active--;
                //判断界面是单列还是双列
                if (get_Active_localName() == 'li') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ')').addClass('active');
                } else if (get_Active_localName() == 'span') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ') span').last().addClass('active');
                }
            }
            break;
        case 'select_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            if (data.selectActive > 0) data.selectActive--;
            //判断界面是单列还是双列
            $('.active').removeClass('active');
            $('li:eq(' + data.active + ') span').last().addClass('active');
            $('.select').removeClass('select');
            $('ul:eq(1) li:eq(' + data.selectActive + ')').addClass('select');
            break;
        case 'num_list':
            var data = get_data();
            var list = data.key[1].split('');
            var numActive = Math.round(list[data.numActive]);
            if(numActive == 9) {
                numActive = 0;
            } else {
                numActive++;
            }
            list[data.numActive] = numActive;
            data.key[1] = list.toString().replaceAll(',', '');
            auto();
            break;
    }
}

//down事件
function down() {
    switch (renderType) {
        case 'list':
        case 'dbl_list':
            if (has_active()) {
                var hash = convert_hash() + '_list_data';
                var data = window[hash];
                if (data.active < data.list.length) data.active++;
                //判断界面是单列还是双列
                if (get_Active_localName() == 'li') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ')').addClass('active');
                } else if (get_Active_localName() == 'span') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ') span').last().addClass('active');
                }
            }
            break;
        case 'select_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            if (data.selectActive < data.select.length - 1) data.selectActive++;
            //判断界面是单列还是双列
            $('.active').removeClass('active');
            $('li:eq(' + data.active + ') span').last().addClass('active');
            $('.select').removeClass('select');
            $('ul:eq(1) li:eq(' + data.selectActive + ')').addClass('select');
            break;
        case 'num_list':
            var data = get_data();
            var list = data.key[1].split('');
            var numActive = Math.round(list[data.numActive]);
            if(numActive == 0) {
                numActive = 9;
            } else {
                numActive--;
            }
            list[data.numActive] = numActive;
            data.key[1] = list.toString().replaceAll(',', '');
            auto();
            break;
    }
}

function left() {
    switch (renderType) {
        case 'num_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[1].split('');
            if (data.numActive > 0) {
                data.numActive--;
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            $('#under').offset({left: pos.left + 8 * data.numActive, top: pos.top})
    }
}

function right() {
    switch (renderType) {
        case 'num_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[1].split('');
            if (data.numActive < list.length - 1) {
                data.numActive++;
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            $('#under').offset({left: pos.left + 8 * data.numActive, top: pos.top})
    }
}

$('#ent').click(function () {
    enter();
});

$('#menu').click(function () {
    menu();
});

$('#up').click(function () {
    up();
});

$('#down').click(function () {
    down();
});

$('#left').click(function () {
    left();
});

$('#right').click(function () {
    right();
});
