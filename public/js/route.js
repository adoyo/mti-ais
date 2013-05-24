/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */

var Route = Backbone.Router.extend({
    routes: {
        '': 'auto',
        'index': 'auto',
        'msg': 'auto',
        'msg/create': 'auto',
        'msg/create/set': 'auto',
        'msg/create/set/msg/type': 'auto',
        'msg/create/set/msg/type/adrs': 'auto',
        'msg/create/set/msg/type/mmsi': 'auto',
        'msg/create/set/msg/type/msg': 'auto',
        'msg/create/set/msg/type/channel': 'auto',
        'msg/create/set/msg': 'auto',
        'msg/tx': 'auto',
        'msg/tx/:id': 'msg_tx_query',
        'msg/rx': 'auto',
        'msg/rx/:id': 'msg_rx_query',
        'sensor': 'auto',
        'internsal': 'auto',
        'user': 'auto',
        'intial': 'auto',
        'channel': 'auto',
        'channel/view':'auto',
        'channel/edit':'auto',
        'diagnostics': 'auto'
    },

    auto: function() {
        auto();
    },

    msg_tx_query: function(id) {
        msg_tx_query(id);
    },

    msg_rx_query: function(id) {
        msg_rx_query(id);
    }
});

var route = new Route();
Backbone.history.start();

