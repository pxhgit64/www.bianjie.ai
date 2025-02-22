<template>
    <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <ClientOnly>
            <Navigation></Navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_container">
                <NewHome v-if="$page.frontmatter.isNewHome"></NewHome>
                <IritaHub v-if="$page.frontmatter.isIritaHub"></IritaHub>
                <IritaOpb v-if="$page.frontmatter.isIritaOpb"></IritaOpb>
                <IritaOpbExtension v-if="$page.frontmatter.isIritaOpbExtension"></IritaOpbExtension>
                <IritaBean v-if="$page.frontmatter.isIritaBean"></IritaBean>
                <IritaDa v-if="$page.frontmatter.isIritaDa"></IritaDa>
                <Dynamic v-if="$page.frontmatter.isDynamic"></Dynamic>
                <Partner v-if="$page.frontmatter.isPartner"></Partner>
                <About v-if="$page.frontmatter.isAbout"></About>
                <Milestone v-if="$page.frontmatter.isMilestone"></Milestone>
                <Honour v-if="$page.frontmatter.isHonour"></Honour>
                <Join v-if="$page.frontmatter.isJoin"></Join>
                <AppScenes v-if="showApp"></AppScenes>
                <Markdown :showMd="showMd"></Markdown>
            </div>
        </ClientOnly>
        <ClientOnly>
            <Footer></Footer>
        </ClientOnly>
    </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import Navigation from "@theme/components/Navigation.vue";
import NewHome from "@theme/components/Home/NewHome.vue";
import IritaHub from "@theme/components/Product/IritaHub.vue";
import IritaOpb from "@theme/components/Product/IritaOpb.vue";
import IritaOpbExtension from "@theme/components/Product/IritaOpbExtension.vue";
import IritaBean from "@theme/components/Product/IritaBean.vue";
import IritaDa from "@theme/components/Product/IritaDa.vue";
import Dynamic from "@theme/components/Dynamic/Dynamic.vue";
import Partner from "@theme/components/Partner/Partner.vue";
import About from "@theme/components/About/About.vue";
import Milestone from "@theme/components/Milestone/Milestone.vue";
import Honour from "@theme/components/Honour/Honour.vue";
import Join from "@theme/components/Join/Join.vue";
import Markdown from "@theme/components/Common/Markdown.vue";
import AppScenes from "@theme/components/AppScenes/AppScenes.vue";
import Footer from "@theme/components/Footer.vue";

import { resolveSidebarItems } from "../util";
const nav = require("../../config.js");

export default {
    name: "Layout",
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    computed: {
        showMd() {
            return Object.keys(this.$page.frontmatter).length === 0;
        },
        showApp(){
            if(this.$route.path === '/applications/e-licence.html') {
                return '$page.frontmatter.isELicence';
            }
            if(this.$route.path === '/applications/trade-finance.html') {
                return '$page.frontmatter.isTradeFinance';
            }
            if(this.$route.path === '/applications/C-trading.html') {
                return '$page.frontmatter.isCTrading';
            }
            if(this.$route.path === '/applications/digital-art.html') {
                return '$page.frontmatter.isDigitalArt';
            }
            if(this.$route.path === '/applications/e-prescription-circulation.html') {
                return '$page.frontmatter.isEPC';
            }
            if(this.$route.path === '/applications/datacollection.html') {
                return '$page.frontmatter.isDataCollection';
            }
        },
        shouldShowNavbar() {
            const { themeConfig } = this.$site;
            const { frontmatter } = this.$page;
            if (frontmatter.navbar === false || themeConfig.navbar === false) {
                return false;
            }
            return (
                this.$title ||
                themeConfig.logo ||
                themeConfig.repo ||
                themeConfig.nav ||
                this.$themeLocaleConfig.nav
            );
        },

        shouldShowSidebar() {
            const { frontmatter } = this.$page;
            return (
                !frontmatter.home &&
                frontmatter.sidebar !== false &&
                this.sidebarItems.length
            );
        },

        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            );
        },

        pageClasses() {
            const userPageClass = this.$page.frontmatter.pageClass;
            return [
                {
                    "no-navbar": !this.shouldShowNavbar,
                    "sidebar-open": this.isSidebarOpen,
                    "no-sidebar": !this.shouldShowSidebar,
                },
                userPageClass,
            ];
        },
    },
    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen =
                typeof to === "boolean" ? to : !this.isSidebarOpen;
            this.$emit("toggle-sidebar", this.isSidebarOpen);
        },

        // side swipe
        onTouchStart(e) {
            this.touchStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
            };
        },

        onTouchEnd(e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x;
            const dy = e.changedTouches[0].clientY - this.touchStart.y;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx > 0 && this.touchStart.x <= 80) {
                    this.toggleSidebar(true);
                } else {
                    this.toggleSidebar(false);
                }
            }
        },
    },
    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false;
        });
    },
    watch: {
        $route: {
            handler(val, oldval) {
                nav.themeConfig.nav.forEach((item, index) => {
                    if (item.link === val.path) {
                        this.$store.commit("currentIndex", index);
                    }
                });
            },
            immediate: true,
            deep: true,
        },
    },
    components: {
        Home,
        Page,
        Sidebar,
        Navbar,
        Navigation,
        NewHome,
        IritaHub,
        IritaOpb,
        IritaOpbExtension,
        IritaBean,
        IritaDa,
        Dynamic,
        Partner,
        About,
        Milestone,
        Honour,
        Join,
        Markdown,
        AppScenes,
        Footer,
    },
};
</script>
<style lang='stylus'>
@import '../../public/iconfont/iconfont.css';

.theme-container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    .main_container {
        flex: auto;
    }
}
</style>
