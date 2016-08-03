(function($, Vue, Core, Widgets) {

    var P = Widgets.Props;
    var T = Widgets.Tabs;

    var SitemapWidget =
    Widgets.Widget(Widgets.NavigationGroup, Widgets.create({
        name: 'academy-sitemap',
        tag: 'academy-sitemap',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            {
                name: 'items', title: 'Items', type: 'object', tab: 'data',
                tabs: [ T.Data, T.Appearance ],
                props: [
                    {
                        name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                        tabs: [ T.Data, T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background, P.Vlink, P.Href, P.Title,
                            {
                                name: 'items', title: 'Items', type: 'object', tab: 'data',
                                tabs: [ T.Data, T.Appearance ],
                                props: [
                                    {
                                        name: 'collection', title: 'Collection', type: 'multiple', tab: 'data',
                                        tabs: [ T.Data ],
                                        props: [ P.Margin, P.Padding, P.Background, P.Vlink, P.Href, P.Title, ]
                                    },
                                    {
                                        name: 'style', title: 'Item Style', type: 'object', tab: 'appearance',
                                        tabs: [ T.Appearance ],
                                        props: [ P.Margin, P.Padding, P.Background ],
                                    },
                                ]
                            },
                            {
                                name: 'head', title: 'Head Style', type: 'object', tab: 'appearance',
                                tabs: [ T.Appearance ],
                                props: [ P.Margin, P.Padding, P.Background ],
                            },
                            {
                                name: 'body', title: 'Body Style', type: 'object', tab: 'appearance',
                                tabs: [ T.Appearance ],
                                props: [ P.Margin, P.Padding, P.Background ],
                            }
                        ]
                    },
                    {
                        name: 'style', title: 'Item Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background ],
                    },
                    {
                        name: 'head', title: 'Head Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background ],
                    },
                    {
                        name: 'body', title: 'Body Style', type: 'object', tab: 'appearance',
                        tabs: [ T.Appearance ],
                        props: [ P.Margin, P.Padding, P.Background ],
                    }
                ]
            },
        ],
    }));

    Widgets.Item(Widgets.NavigationGroup, {
        name: 'academy-sitemap',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/sitemap/sitemap.png',
        widget: Widgets.build(SitemapWidget, {
            outer: {
                value: {
                    background: { value: '#266181' },
                },
            },
            inner: {
                value: {
                    margin: { value: '0px auto' },
                },
            },
            width: { value: '1200px' },
            items: {
                value: {
                    // style: {
                    //     value: {
                    //         padding: { value: '12px 16px' },
                    //         margin: { value: '4px 2px' },
                    //     }
                    // },
                    collection: {
                        value: [
                            {
                                title: { value: "Tuition Courses" },
                                items: {
                                    value: {
                                        collection: {
                                            value: [
                                                { title: { value: "Beginner Schools" } },
                                                { title: { value: "Intermediate Schools" } },
                                                { title: { value: "Advanced Schools" } },
                                                { title: { value: "Specialist Schools" } },
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                title: { value: "During Your Stay" },
                                items: {
                                    value: {
                                        collection: {
                                            value: [
                                                { title: { value: "Golf Lodge" } },
                                                { title: { value: "Restaurant & Bar" } },
                                                { title: { value: "Places to Visit" } },
                                                { title: { value: "FAQ" } },
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                title: { value: "About Us" },
                                items: {
                                    value: {
                                        collection: {
                                            value: [
                                                { title: { value: "Why Us?" } },
                                                { title: { value: "Testimonials" } },
                                                { title: { value: "In the Media" } },
                                                { title: { value: "How to find us" } },
                                            ]
                                        }
                                    }
                                }
                            },
                        ]
                    }
                }
            },
        }),
    });

})(jQuery, Vue, Core, Widgets);
