const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const SvgIcon = require('../../svg-icon');

const ActionAccessibility = React.createClass({

    mixins: [PureRenderMixin],

    render() {
        return (
            <SvgIcon {...this.props}>
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3.5h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3.5h1c.55 0 1-.45 1-1v-10h-12v10zm-2.5-10c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48c-.79-.4-1.69-.63-2.64-.63-.96 0-1.86.23-2.66.63l-1.49-1.48c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31c-1.48 1.09-2.45 2.84-2.45 4.83h12c0-1.99-.97-3.75-2.47-4.84zm-5.53 2.84h-1v-1h1v1zm5 0h-1v-1h1v1z"></path>
            </SvgIcon>
        );
    }

});

module.exports = ActionAccessibility;