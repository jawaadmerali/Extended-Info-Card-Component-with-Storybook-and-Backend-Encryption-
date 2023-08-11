<template>
    <section class="inline large">
        <div class="grid fixed fixed-max-sm large grid-xs-1">
            <div class="text-center">
                <h2><b class="f3 text-bold">{{title}}</b> </h2>
            </div>
            <div class="list-card">
                <mvtLazyload ref="lazyload" data-role="mortgagetoolcard">
                    <mvtShifter ref="shifter" :center="true" v-if="mortgageData && mortgageData.length">
                        <infoCard v-for="item in mortgageData"
                            :key="item.id"
                            :headerText="item.title"
                            :descriptionText="item.description"
                            :buttonLabel="item.action"
                            :buttonHref="glb.appUrl + item.href"
                            textAlign="left"
                        />
                    </mvtShifter>
                </mvtLazyload>
            </div>
        </div>
    </section>
</template>

<script src="./mortgagetools.js"></script>
