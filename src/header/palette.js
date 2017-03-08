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

    Widgets.Item(Widgets.HeadersGroup, {
        name: 'academy-header',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/header/header.png',
        widget: (context) => Promise.resolve(Widgets.build(HeaderWidget, {
            outer: {
                value: {
                    background: { value: '#F5F5F5' },
                },
            },
            inner: {
                value: {
                    margin: { value: '0px auto' },
                    padding: { value: '0px 20px' },
                },
            },
            email: { value: 'info@moscowacademy.com' },
            phone: { value: '+7 (495) 123-4567' },
            tw: { value: 'https://twitter.com/bookAgolf' },
            fb: { value: 'https://ru-ru.facebook.com/bookagolf' },
            gl: { value: 'https://plus.google.com/communities/102202642996727382512' },
            logo: { value: '/assets/vendor/ntr1x-archery-widgets-academy/src/header/img/logo.png' },
            promo: { value: `
                <h1>Voted the UK's<br />Leading Residential<br />Golf School</h1>
                <h3>by Today’s Golfer Magazine</h3>
            ` },
        })),
    });

})(jQuery, Vue, Core, Widgets);
