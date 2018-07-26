<template>
    <div>
        <img @click="incrementCount" src="../assets/PerfectCookie.png">
        <h1>Cookies : {{ count }}</h1>
        <p style="font-weight: bold">par seconde : {{ cookiesPerSecond }}</p>
        <div style="padding-top: 20px;">
            <h2>Bonus :</h2>
        </div>
        <div>
            <img @click="incrementCursor" style="width: 40px;height: 40px;" src="../assets/CursorIconTransparent.png">
            <span> : {{ cursor}}</span>
        </div>
        <div>
            <span> {{cursorPricing}} </span>
            <img style="width: 20px;height: 20px;" src="../assets/PerfectCookie.png">
        </div>

        <div style="padding-top: 20px">
            <img @click="incrementGrandma" style="width: 40px;height: 40px;" src="../assets/GrandmaIconTransparent.png">
            <span> : {{ grandma}}</span>
        </div>
        <div>
            <span> {{grandmaPricing}} </span>
            <img style="width: 20px;height: 20px;" src="../assets/PerfectCookie.png">
        </div>

        <div style="padding-top: 20px">
            <img @click="incrementFarm" style="width: 40px;height: 40px;" src="../assets/FarmIconTransparent.png">
            <span> : {{ farm}}</span>
        </div>
        <div>
            <span> {{farmPricing}} </span>
            <img style="width: 20px;height: 20px;" src="../assets/PerfectCookie.png">
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Counter",
        created () {
            setInterval(function () {
                this.$store.dispatch("addCookiesPerSecondToCount")
            }.bind(this), 1000);
        },
        computed: {
            ...mapGetters([
                'count',
                'cookiesPerSecond',
                'cursor',
                'cursorPricing',
                'grandma',
                'grandmaPricing',
                'farm',
                'farmPricing'
            ])
        },
        methods: {
            incrementCount() {
                this.$store.dispatch("incrementCount")
            },
            incrementCursor() {
                if (this.$store.getters.count >= this.$store.getters.cursorPricing) {
                    this.$store.dispatch("incrementCursor");
                    this.$store.dispatch("removeFromCount", this.cursorPricing)
                }
            },
            incrementGrandma() {
                if (this.$store.getters.count >= this.$store.getters.grandmaPricing) {
                    this.$store.dispatch("incrementGrandma");
                    this.$store.dispatch("removeFromCount", this.grandmaPricing)
                }
            },
            incrementFarm() {
                if (this.$store.getters.count >= this.$store.getters.farmPricing) {
                    this.$store.dispatch("incrementFarm");
                    this.$store.dispatch("removeFromCount", this.farmPricing)
                }
            }
        }
    }
</script>