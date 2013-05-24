/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */
//单列列表：用于菜单的显示
var list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i}'
    + '<li>${i}</li>'
    + '{@/each}'
    + '</ul>';

//双列列表:用于msg tx与rx的显示
var dbl_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 120px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul>';

//选择列表:用于set msg type时的显示
var select_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 120px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul>'
    + '<ul class="select-box">'
    + '{@each select as j}'
    + '<li>${j}</li>'
    + '{@/each}'
    + '</ul>';

//双列列表+下划线:用于数值改变
var num_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 120px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul><span id="under">_</span>';

//渲染数据
function render_list(data) {
    renderType = 'list';
    var list_html = juicer(list_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +')').addClass('active');
}

function render_dbl_list(data) {
    renderType = 'dbl_list';
    var list_html = juicer(dbl_list_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +') span').last().addClass('active');
}

function render_select_list(data) {
    renderType = 'select_list';
    var list_html = juicer(select_list_tpl, data);
    $('#led').html(list_html);
    $('ul:eq(0) li:eq(' + data.active +') span').last().addClass('active');
    $('ul:eq(1) li:eq(' + data.selectActive +')').addClass('select');
    var active = $('.active')[0];
    var _top = active.offsetTop;
    var _left = active.offsetLeft + active.offsetWidth + 20;
    $('.select-box').first().offset({top: _top, left: _left});
}

function render_num_list(data) {
    renderType = 'num_list';
    var list_html = juicer(num_list_tpl, data);
    $('#led').html(list_html);
    var num = lastActive * 2 + 1;
    var pos = $('span:eq(' + num + ')').offset();
    $('#under').offset({left: pos.left + data.numActive * 8, top: pos.top})
    $('.active').removeClass('active');
}
