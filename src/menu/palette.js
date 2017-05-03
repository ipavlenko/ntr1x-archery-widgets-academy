(function($, Vue, Core, Widgets) {

    var P = Widgets.Props;
    var T = Widgets.Tabs;

    var MenuWidget =
    Widgets.Widget(Widgets.NavigationGroup, Widgets.create({
        name: 'academy-menu',
        tag: 'academy-menu',
        title: 'Academy Menu',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            {
                name: 'items', title: 'Items', type: 'object', tab: 'data',
                tabs: [ T.Data, T.Appearance ],
                props: [
                    {
                        name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                        tabs: [ T.Data ],
                        props: [ P.Margin, P.Padding, P.Background,
                            { name: 'vlink', title: 'Vlink', type: 'string', tab: 'data', },
                            { name: 'href', title: 'Href', type: 'string', tab: 'data', },
                            { name: 'title', title: 'Title', type: 'string', tab: 'data', },
                            { name: 'active', title: 'Active', type: 'string', tab: 'data', },
                        ]
                    },
                    {
                        name: 'style', title: 'Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background, ],
                    }
                ]
            },
        ],
    }));

    Widgets.Item(Widgets.NavigationGroup, {
        name: 'academy-menu',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/menu/menu.png',
        widget: (context) => Promise.resolve(Widgets.build(MenuWidget, {
            outer: {
                value: {
                    background: { value: '#266181' },
                },
            },
            inner: {
                value: {
                    margin: { value: '0px 20px' },
                },
            },
            items: {
                value: {
                    style: {
                        value: {
                            padding: { value: '12px 16px' },
                            margin: { value: '4px 2px' },
                        }
                    },
                    collection: {
                        value: [
                            { vlink: { value: '' }, title: { value: 'Home' }, active: { value: true } },
                            { vlink: { value: 'courses' }, title: { value: 'Courses' }, },
                            { vlink: { value: 'about' }, title: { value: 'About' }, },
                        ]
                    }
                }
            },
        })),
    });

})(jQuery, Vue, Core, Widgets);
