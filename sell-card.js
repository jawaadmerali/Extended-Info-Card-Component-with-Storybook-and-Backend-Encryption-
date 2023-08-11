import { mapGetters } from 'vuex';
import sellHotlead from '@/sell/components/sellhotlead/sell-hotlead.vue';
import InfoCard from './info-card.presentational.vue';

export default {
    name: 'sellCard',
    inject: ['$eventBus'],
    components: {
        sellHotlead,
        InfoCard,
    },
    computed: {
        ...mapGetters('glb', ['viewport', 'glb']),
        hotleadOpt() {
            return {
                hotleadType: 'SellPageConnectWithAgent',
                buttonText: 'Get Started',
                hotleadTitle: 'Sell your home with a top local agent',
                showZipcode: true,
                noSellLead: true,
                hideVeteran: true,
            };
        }
    },
};
