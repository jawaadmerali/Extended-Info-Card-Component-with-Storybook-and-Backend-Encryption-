import type { Meta, StoryObj } from '@storybook/vue3';
import InfoCard from '../vweb/sell/components/sellcard/info-card.presentational.vue';

const meta: Meta<typeof InfoCard> = {
    title: 'General/Info Card',
    component: InfoCard,
    tags: ['autodocs'],
    argTypes: {
        textAlign: { control: 'radio', options: ['left', 'center', 'right'] },
        iconClass: { control: 'radio', options: ['icon-open-house', 'icon-box', ''] },
    },
    args: {
        iconClass: '',
        headerText: '',
        descriptionText: '',
    },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
    args: {
        iconClass: 'icon-open-house',
        headerText: 'Match with a listing agent',
        descriptionText: 'We’ll connect you to a local agent who will be by your side from listing to closing.',
        buttonLabel: '',
        buttonHref: '',
    },
};
