(function($, Vue, Core, Widgets) {

    var HeaderWidget =
    Widgets.Widget(Widgets.HeadersGroup, Widgets.create({
        name: 'academy-header',
        tag: 'academy-header',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'logo', title: 'Logo', type: 'string', tab: 'content' },
            { name: 'promo', title: 'Promo', type: 'rich', tab: 'content' },
            { name: 'email', title: 'Email', type: 'string', tab: 'content' },
            { name: 'phone', title: 'Phone', type: 'string', tab: 'content' },
            { name: 'tw', title: 'Twitter', type: 'string', tab: 'content' },
            { name: 'gl', title: 'Google+', type: 'string', tab: 'content' },
            { name: 'fb', title: 'Facebook', type: 'string', tab: 'content' },
            { name: 'vk', title: 'Vkontakte', type: 'string', tab: 'content' },
        ],
    }));

    console.log(123);

    Widgets.Item(Widgets.HeadersGroup, {
        name: 'academy-header',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/header/header.png',
        widget: Widgets.build(HeaderWidget, {
            inner: {
                value:  {
                    margin: { value: '0px auto' },
                },
            },
            width: { value: '1200px' },
            email: { value: 'info@moscowacademy.com' },
            phone: { value: '+7 (495) 123-4567' },
            tw: { value: 'https://twitter.com/bookAgolf' },
            fb: { value: 'https://ru-ru.facebook.com/bookagolf' },
            gl: { value: 'https://plus.google.com/communities/102202642996727382512' },
            logo: { value: '/assets/vendor/ntr1x-archery-widgets-academy/src/header/img/logo.png' },
            promo: { value: `
                <h1>Voted the UK's Leading Residential Golf School by Today’s Golfer Magazine</h1>
                <h4>by Today’s Golfer Magazine</h4>
            ` },
        }),
    });

})(jQuery, Vue, Core, Widgets);
