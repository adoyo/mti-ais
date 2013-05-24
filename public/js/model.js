/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */
var lastActive = 1;//上级菜单选中值
var renderType = 'list';//渲染方式
//首页菜单
var index_list_data = {
    title: '[MENU]',
    list: ['MSG', 'SENSOR STATUS', 'INTERNSAL GPS', 'USER SETTINGS', 'INTIAL SETTINGS',
    'CHANNEL SETTINGS', 'DIAGNOSTICS'],
    active: 1
};

//msg菜单
var msg_list_data = {
    title: '[MSG]',
    list: ['CREATE MSG', 'TX LOG', 'RX LOG'],
    active: 1
};

//msg_create菜单
var msg_create_list_data = {
    title: '[CREATE MSG]',
    list: ['SET MSG TYPE', 'SET MSG', 'SEND MSG'],
    active: 1
};

var msg_create_set_msg_type_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: ['BROAD CAST', '412863000', 'SATETY', 'BOTH B'],
    active: 1
};

var msg_create_set_msg_type_adrs_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: ['BROAD CAST', '412863000', 'SATETY', 'BOTH B'],
    select: ['BROAD CAST', 'ADRS CAST'],
    active: 1,
    selectActive: 0
};

var msg_tx_list_data = {
    title: '[TX LOG]',
    list: [['13-APR-25', '1', '<br>', 'TO:412863000', 'S-ABM']],
    active: 1
};

var msg_rx_list_data = {
    title: '[TX LOG]',
    list: [['13-APR-25', '1', '<br>', 'TO:412863000', 'S-ABM']],
    active: 1
};

var internsal_list_data = {
    title: '[INTERNAL GPS]',
    list: ['LAT:      24°59.7′N',
           'LON:      119°8.35′E',
           'S/C:      12kn/12°',
           'UTC:      12/13/12<br>14:30:57',
           'DGPS:     STS:D3D',
           'PA:       H RAIM:USED']
}

var intial_list_data = {
    title: '[INITIA SETTINGS]',
    list: ['VIEW MMSG', 'VIEW INT ANT POS', 'VIEW EXT ANT POS', 'VIEW SHIP TYPE',
    'VIEW I/0 PORT'],
    active: 1
}

var channel_list_data = {
    title: '[CHANNEL SETTINGS]',
    list: ['VIEW CHANNEL', 'EDIT CHANNEL'],
    active: 1
}

var diagnostics_list_data = {
    title: '[CHANNEL SETTINGS]',
    list: ['MONITOR', 'TRANSPONDER TEST', 'PWR ON/OFF HISTORY', 'TX ON/OFF HISTORY',
    'MEMORY CLEAR', 'ACTIVATE KEY', 'FOR SERVICE'],
    active: 1
}

//channel view菜单
var channel_view_list_data = {
    title: '[VIEW CHANNEL]',
    list: ['POWER:　　　　　 12.5W', 'CHANNEL NO.', 'CH-A:　　　　　　2087','CH-B:　　　　　　2088']
};

//channel view菜单
var channel_edit_list_data = {
    title: '[EDIT CHANNEL]',
    list: ['SELECT NO:', 'TIME[UTC]', '--/---:-:-','FORM'],
    key: ['0'],
    active: 1
};

//channel view edit_select 菜单
var channel_edit_select_list_data ={
    title: '[EDIT CHANNEL]',
    list: ['FROM MMSI: ___________', 'POWER:','　　　　　　CH-A:','　　　　　　CH-B:','MODE　　　　CH-A:','　　　　　　CH-B:','Zone','CH NO'],
    key: ['','12.5W','2087','2087','TX/RX','TX/RX','1NM'],
    active: 2
};

