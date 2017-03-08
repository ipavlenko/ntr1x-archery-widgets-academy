(function($, Vue, Core, Widgets) {

    var FooterWidget =
    Widgets.Widget(Widgets.FootersGroup, Widgets.create({
        name: 'academy-footer',
        tag: 'academy-footer',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'logo', title: 'Logo', type: 'string', tab: 'content' },
            { name: 'copy', title: 'Copyright', type: 'string', tab: 'content' },
            { name: 'email', title: 'Email', type: 'string', tab: 'content' },
            { name: 'phone', title: 'Phone', type: 'string', tab: 'content' },
            { name: 'tw', title: 'Twitter', type: 'string', tab: 'content' },
            { name: 'gl', title: 'Google+', type: 'string', tab: 'content' },
            { name: 'fb', title: 'Facebook', type: 'string', tab: 'content' },
            { name: 'vk', title: 'Vkontakte', type: 'string', tab: 'content' },
        ],
    }));

    Widgets.Item(Widgets.FootersGroup, {
        name: 'academy-footer',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/footer/footer.png',
        widget: (context) => Promise.resolve(Widgets.build(FooterWidget, {
            outer: {
                value: {
                    background: { value: '#0B3C55' },
                },
            },
            inner: {
                value: {
                    margin: { value: '0px auto' },
                },
            },
            width: { value: '1200px' },
            email: { value: 'info@moscowacademy.com' },
            phone: { value: '+7 (495) 123-4567' },
            tw: { value: 'https://twitter.com/bookAgolf' },
            fb: { value: 'https://ru-ru.facebook.com/bookagolf' },
            gl: { value: 'https://plus.google.com/communities/102202642996727382512' },
            copy: { value: 'Copyright 2016 © MoscowAcademy.com' },
        })),
    });

})(jQuery, Vue, Core, Widgets);
