import { mapGetters } from 'vuex';
import infoCard from '../../../../sell/components/sellcard/info-card.presentational.vue';

var data = [
    {
        id: 'vbuyingpower',
        title: 'Know Your Buying Power',
        description: 'How much house can you afford? ',
        action: 'Estimate Affordability',
        href: 'mortgages/buyingpower/'
    },
    {
        id: 'vmortgagecalculator',
        title: 'Mortgage Calculator',
        description: 'Plan a comfortable monthly payment for your next home.',
        action: 'Calculate Payments',
        href: 'mortgages/calculator/'
    },
    {
        id: 'vmortgagerates',
        title: 'Mortgage Rates',
        description: 'Research and compare side-by-side rates.',
        action: 'Learn Today’s Rates',
        href: 'mortgages/rates/'
    },
    {
        id: 'vpreapproval',
        title: 'Get Preapproved',
        description: 'Find out how much you can borrow based on your financial situation.',
        action: 'Get Preapproved',
        href: 'preapproval/'
    },
    {
        id: 'vrefinance',
        title: 'Refinance Rates',
        description: 'Find out how much you can save on your current mortgage.',
        action: 'Find Savings',
        href: 'mortgages/refinance/'
    }
];

export default {
    name: 'mortgageTools',
    components: { infoCard },
    props: {
        id: {
            default: '',
        },
        title: {
            default: 'Explore More Mortgage Tools',
        },
        subText: {
            type: String,
            required: false,
        },
        preTitle: {
            type: String,
            required: false,
        },
    },
    computed: {
        ...mapGetters('glb', ['glb']),
        mortgageData() {
            return data.filter((e) => e.id != this.id);
        },
    },
};
