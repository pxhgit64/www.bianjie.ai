<template>
    <div class="nav_container" :class="isColor ? 'white_bg' : ''">
        <div class="nav_content">
            <div class="nav_logo" @click="toHome">
                <img
                    v-if="!isColor"
                    src="../assets/home/logo_white.png"
                    alt=""
                />
                <img
                    v-if="isColor"
                    src="../assets/home/logo_black.png"
                    alt=""
                />
            </div>
            <div class="nav_list_wrap">
                <ul class="nav_list">
                    <li
                        v-show="!item.isRight"
                        class="nav_list_item"
                        v-for="(item, index) in navigationList"
                        :key="index"
                        @click="changeIndex(index)"
                        @mouseenter="menuShowFn(index)"
                        @mouseleave="closeProdAppMenu"
                    >
                        <router-link
                            class="item"
                            :class="[ 
                                isColor ? 'color_font' : '', 
                                (!isColor && currentIndex === index) ? 'active' : '',
                                (isColor && currentIndex === index) ? 'color_font_active' : '',
                            ]"
                            :to="item.link"
                        >
                            {{ item.text }}
                        </router-link>
                        <div v-if="item.items && item.items.length > 0 && index === 1 && prodMenuShow" class="products_menu">
                            <ul class="product_type_list">
                                <li class="product_type_item" v-for="(subItem, subIndex) in item.items" :key="subIndex">
                                    <div class="type_wrap">
                                        <i class="iconfont" :class="subItem.icon"></i>
                                        <span class="type">{{subItem.type}}</span>
                                    </div>
                                    <ul class="type_list">
                                        <li class="type_item" v-for="(product, pIndex) in subItem.productList" :key="pIndex">
                                            <span class="abbreviation" v-if="product.link" @click="closeProdAppMenuLink(product.link)" >{{product.abbreviation}}</span>
                                            <!-- <a class="abbreviation" v-if="product.link" @click="closeProdAppMenu" :href="product.link" target="_blank" rel="noopener noreferrer" >{{product.abbreviation}}</a> -->
                                            <router-link class="abbreviation" v-if="product.route" :to="product.route" @click.native="closeProdAppMenu">
                                                <span class="cursor_pointer">{{product.abbreviation}}</span>
                                            </router-link>
                                            <div class="intro">{{product.intro}}</div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div  v-if="item.items && item.items.length > 0 && index === 2 && appMenuShow" class="appscenes_menu">
                            <ul class="appscenes_scene_list">
                                <li class="appscenes_scene_item" v-for="(appscene, aIndex) in item.items" :key="aIndex">
                                    <div class="scene_wrap">
                                        <div class="scene_item">
                                            <i class="iconfont" :class="appscene.icon"></i>
                                            <span class="scene">{{appscene.scene}}</span>
                                        </div>
                                    </div>
                                    <router-link :to="appscene.link" class="scene_text" @click.native="closeProdAppMenu">{{appscene.text}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="more">
                    <router-link
                        class="nav_list_item"
                        :class="isColor ? 'nav_list_item_color' : ''"
                        :to="`/download.html`"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <i class="iconfont icon-a-learnmore" :class="isColor ? 'iconfont_color' : '' "></i>
                        {{ download }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="mobile_nav_container">
            <div class="mobile_nav_content">
                <div class="nav_logo" @click="toHome">
                    <img
                        v-if="!isColor"
                        src="../assets/home/logo_white.png"
                        alt=""
                    />
                    <img
                        v-if="isColor"
                        src="../assets/home/logo_black.png"
                        alt=""
                    />
                </div>
                <div class="mobile_menu_icon" @click="isShowMobileMenu">
                    <i class="iconfont icon-caidan" :class="isColor ? 'iconfont_color' : ''"></i>
                </div>
            </div>
            <div v-if="flShowMobileMenu" class="mobile_nav_list_wrap mobile_white_bg">
                <ul class="nav_list">
                    <li
                        v-show="!item.isRight"
                        class="nav_list_item"
                        v-for="(item, index) in navigationList"
                        :key="index"
                        @click="changeIndex(index)"
                    >
                        <div class="list_item_wrap">
                            <div class="mobile_list_item">
                                <router-link
                                    class="mobile_item"
                                    :class="[ 
                                        isColor ? 'color_font' : '', 
                                        (!isColor && currentIndex === index) ? 'active' : '',
                                        (isColor && currentIndex === index) ? 'color_font_active' : '',
                                    ]"
                                    :to="item.link"
                                    @click.native="closeMobileMenu(index)"
                                >
                                    {{ item.text }}
                                </router-link>
                                <i class="iconfont" v-if="item.items" :class="$store.state.subMenu == index ? 'icon-shouqi' : 'icon-zhankai'" @click="showSubMenu(index)"></i>
                            </div>
                        </div>

                        <div v-if="item.items && item.items.length > 0 && index === 1 && isShowProductSub" class="products_menu">
                            <ul class="product_type_list">
                                <li class="product_type_item" v-for="(subItem, subIndex) in item.items" :key="subIndex">
                                    <div class="type_wrap">
                                        <i class="iconfont" :class="subItem.icon"></i>
                                        <span class="type">{{subItem.type}}</span>
                                    </div>
                                    <ul class="type_list">
                                        <li class="type_item" v-for="(product, pIndex) in subItem.productList" :key="pIndex">
                                            <span class="abbreviation" v-if="product.link" @click="closeSubProdAppMenu(product.link)">{{product.abbreviation}}</span>
                                            <router-link class="abbreviation" v-if="product.route" :to="product.route" @click.native="closeSubMenu(index)">{{product.abbreviation}}</router-link>
                                            <div class="intro">{{product.intro}}</div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div  v-if="item.items && item.items.length > 0 && index === 2 && isShowScenesSub" class="appscenes_menu">
                            <ul class="appscenes_scene_list">
                                <li class="appscenes_scene_item" v-for="(appscene, aIndex) in item.items" :key="aIndex">
                                    <div class="scene_wrap">
                                        <div class="scene_item">
                                            <i class="iconfont" :class="appscene.icon"></i>
                                            <span class="scene">{{appscene.scene}}</span>
                                        </div>
                                    </div>
                                    <router-link :to="appscene.link" class="scene_text" @click.native="closeSubMenu(index)">{{appscene.text}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="more">
                    <router-link
                        class="nav_list_item"
                        :to="`/download.html`"
                        target="_blank"
                        rel="noreferrer noopener"
                        :class="isColor ? 'nav_list_item_color' : ''"
                    >
                        <i class="iconfont icon-a-learnmore"></i>
                        {{ download }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            navigation: [],
            isColor: false,
            scroll: "",
            flShowMobileMenu: false,
            isShowProductSub: false,
            isShowScenesSub: false,
            showSubProduct: false,
            showSubScene: false,
            prodMenuShow: false,
            appMenuShow: false
        };
    },
    created() {
        this.navigation = this.$site.themeConfig.nav;
    },
    computed: {
        navigationList() {
            return this.navigation;
        },
        currentIndex() {
            return +this.$store.state.currentIndex;
        },
        download() {
            return (
                this.navigation &&
                this.navigation.length > 0 &&
                this.navigation[this.navigation.length - 1].text
            );
        },
    },
    methods: {
        toHome() {
            this.$router.push("/");
        },
        changeIndex(index) {
            if (this.currentIndex !== index && index !== 6 && index !== 1 && index !== 2) {
                this.$store.commit("currentIndex", index);
                localStorage.setItem("currentIndex", JSON.stringify(index));
            }
        },
        scrollTop() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            const path = this.$route.path.split('.')[0].split('/')[1];
            if (path === 'products' || path === 'applications' || path === 'companynews'|| this.scroll > 48 ) {
                this.isColor = true;
            } else {
                this.isColor = false;
            }
        },
        isShowMobileMenu() {
            this.flShowMobileMenu = !this.flShowMobileMenu;
            this.$store.commit("subMenu", 0);
        },
        closeMobileMenu(index, pIndex) {
            if(index !== 1 && index !== 2) {
                this.flShowMobileMenu = false;
            }
            this.$store.commit("subMenu", 0);
        },
        showSubMenu(index) {
            if(index === 1) {
                this.isShowProductSub = !this.isShowProductSub;
                this.$store.commit("subMenu", this.isShowProductSub ? '1' : '0');
                if(this.isShowProductSub) {
                    this.$store.commit("subMenu", 1);
                } else {
                    this.$store.commit("subMenu", 0);
                }
                this.isShowScenesSub = false;
                this.showSubProduct = true;
            }else if(index === 2) {
                this.isShowScenesSub = !this.isShowScenesSub;
                this.isShowProductSub = false;
                if(this.isShowScenesSub) {
                    this.$store.commit("subMenu", 2);
                } else {
                    this.$store.commit("subMenu", 0);
                }
                this.showSubScene = true;
            }
        },
        closeSubMenu(index){
            if(index === 1) {
                this.isShowProductSub = false;
            }else if(index === 2) {
                this.isShowScenesSub = false;
            }
            this.flShowMobileMenu = false;
            this.$store.commit("subMenu", 0);
        },
        closeSubProdAppMenu(link) {
            this.flShowMobileMenu = false;
            setTimeout(()=>{
                window.open(`${link}`);
            },50)
        },
        menuShowFn(index) {
            if(index === 1) {
                this.prodMenuShow = true;
                this.appMenuShow = false;
            } else if(index === 2) {
                this.appMenuShow = true;
                this.prodMenuShow = false;
            } else {
                this.appMenuShow = false;
                this.prodMenuShow = false;
            }
        },
        closeProdAppMenu() {
            this.appMenuShow = false;
            this.prodMenuShow = false;
        },
        closeProdAppMenuLink(link) {
            this.appMenuShow = false;
            this.prodMenuShow = false;
            setTimeout(()=>{
                window.open(`${link}`);
            },50)
        }
    },
    watch: {
        '$route.path': {
            handler(newPath){
                const path = newPath.split('.')[0].split('/')[1];
                if(path === 'products' || path === 'applications' || path === 'companynews') {
                    this.isColor = true;
                } else {
                    this.isColor = false;
                }
            },
            immediate: true,
            deep: true,
        },
        '$store.state.subMenu': {
            handler(newVal) {
                if(newVal === 0) {
                    this.isShowProductSub = false;
                    this.isShowScenesSub = false;
                }
            },
            immediate: true,
            deep: true
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scrollTop);
    },
};
</script>

<style lang="stylus">
.nav_container {
    position: fixed;
    width: 100%;
    height: 4.8rem;
    z-index: 999;
    transition: all .3s linear;

    .nav_content {
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.8rem;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        @media (max-width: 1200px) {
            padding-left: 4.8rem;
            padding-right: 4.8rem;
        }
        @media (max-width: 968px) {
            display: none;
        }

        .nav_logo {
            width: 9.8rem;
            height: 3.2rem;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .nav_list_wrap {
            position: relative;
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            font-size: $fontSize14;
            font-weight: $fontWeight400;

            .nav_list {
                display: -webkit-flex;
                display: flex;
                height: 100%;

                .nav_list_item {
                    margin-left: 6rem;
                    height: 100%;
                    line-height: 4.8rem;
                    cursor: pointer;

                    &:first-child {
                        margin-left: 0;
                    }

                    .item {
                        position: relative;
                        display: block;
                        height: 100%;
                        color: rgba(255, 255, 255, 0.75);
                        transition: all 0.3s linear;
                        &:hover {
                            color: #fff;
                            &::after {
                                content: '';
                                display: block;
                                clear: both;
                                position: absolute;
                                bottom: 0;
                                width: 100%;
                                height: 0.2rem;
                                background: #fff;
                                transition: all 0.3s linear;
                            }
                        }
                    }

                    .active {
                        position: relative;
                        color: #fff;

                        &::after {
                            content: '';
                            display: block;
                            clear: both;
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 0.2rem;
                            background: #fff;
                        }
                    }

                    .color_font {
                        position: relative;
                        color: rgba(0, 0, 0, 0.75);
                        &:hover {
                            color: #000;
                            &::after {
                                content: '';
                                display: block;
                                clear: both;
                                position: absolute;
                                bottom: 0;
                                width: 100%;
                                height: 0.2rem;
                                background: #0967E9;
                            }
                        }
                    }

                    .color_font_active {
                        position: relative;
                        color: #000;

                        &::after {
                            content: '';
                            display: block;
                            clear: both;
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 0.2rem;
                            background: #0967E9;
                        }
                    }

                    .products_menu {
                        position: absolute;
                        left: 0;
                        box-sizing: border-box;
                        padding: 2.4rem 2.4rem 3.2rem;
                        width: 76rem;
                        background: #fff;
                        cursor: default;
                        .product_type_list {
                            .product_type_item {
                                margin-top: 3.2rem;
                                &:first-child {
                                    margin-top: 0;
                                }
                                .type_wrap {
                                    display: -webkit-flex;
                                    display: flex;
                                    align-items: center;
                                    height: 2.4rem;
                                    border-bottom: 0.1rem solid #EDEDED;
                                    .iconfont {
                                        font-size: $fontSize14;
                                        color: #1677FF;
                                    }
                                    .type {
                                        margin-left: 0.4rem;
                                        font-size: $fontSize14;
                                        font-weight: $fontWeight400;
                                        color: #000;
                                        line-height: 1.4rem;
                                    }
                                }
                                .type_list {
                                    margin-top: 1.1rem;
                                    display: -ms-grid;
                                    display: grid;
                                    grid-template-columns: repeat(3, 1fr);
                                    grid-column-gap: 4.8rem;
                                    grid-row-gap: 1.6rem;
                                    .type_item {
                                        .abbreviation {
                                            display: block;
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight500;
                                            color: #0967E9;
                                            line-height: 1.4rem;
                                            cursor: pointer;
                                        }
                                        .intro {
                                            margin-top: 0.8rem;
                                            font-size: $fontSize12;
                                            font-weight: $fontWeight400;
                                            color: rgba(0, 0, 0, 0.75);
                                            line-height: 1.2rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .appscenes_menu {
                        position: absolute;
                        left: 0;
                        box-sizing: border-box;
                        padding: 2.4rem 2.4rem 3.6rem;
                        width: 76rem;
                        background: #fff;
                        cursor: default;
                        .appscenes_scene_list {
                            display: -ms-grid;
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-column-gap: 8.5rem;
                            grid-row-gap: 3.5rem;
                            z-index: 100;
                            .appscenes_scene_item {
                                .scene_wrap {
                                    box-sizing: border-box;
                                    padding-bottom: 0.7rem;
                                    line-height: 1.4rem;
                                    border-bottom: 0.1rem solid #EDEDED;
                                    .scene_item {
                                        min-height: 1.4rem;
                                        .iconfont {
                                            font-size: $fontSize14;
                                            color: #1677FF;
                                        }
                                        .scene {
                                            margin-left: 0.4rem;
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight400;
                                            color: #000;
                                            line-height: 1.4rem;
                                        }
                                    }
                                }
                                .scene_text {
                                    display: block;
                                    margin-top: 1.2rem;
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight500;
                                    color: #0967E9;
                                    line-height: 1.4rem;
                                }
                            }
                        }
                    }
                }
            }

            .more {
                margin-left: 6rem;

                .iconfont {
                    display: inline-block;
                    margin-right: 0.2rem;
                    width: 1.6rem;
                    height: 1.6rem;
                    color: #fff;
                }
                .iconfont_color {
                    color: #0967E9;
                }

                .nav_list_item {
                    display: inline-block;
                    height: 100%;
                    color: #fff;
                }
                .nav_list_item_color {
                    color: rgba(0, 0, 0, 0.75);
                }
            }
        }
    }
    .mobile_nav_container {
        display: none;
        position: fixed;
        width: 100%;
        height: 4.8rem;
        z-index: 999;
        transition: all .3s linear;
        @media (max-width: 968px) {
            display: block;
        }
        .mobile_nav_content {
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0.8rem 4.8rem;
            wdith: 100%;
            @media (max-width: 420px) {
                padding: 0.8rem 1.6rem;
            }
            .nav_logo {
                width: 9.8rem;
                height: 3.2rem;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .mobile_menu_icon {
                width: 2.4rem;
                height: 1.8rem;
                .iconfont {
                    width: 100%;
                    color: #fff;
                }
                .iconfont_color {
                    color: rgba(0, 0, 0, 0.75);
                }
            }
        }
        .mobile_nav_list_wrap {
            box-sizing: border-box;
            background: #fff;
            .nav_list {
                .nav_list_item {
                    width: 100%;
                    min-height: 4.4rem;
                    line-height: 4.4rem;
                    .list_item_wrap {
                        box-sizing: border-box;
                        margin: 0 4.8rem;
                        border-bottom: 0.1rem solid #E1E5F4;
                        @media (max-width: 420px) {
                            margin: 0 1.6rem;
                        }
                        .mobile_list_item {
                            display: -webkit-flex;
                            display: flex;
                            justify-content: space-between;
                            .mobile_item {
                                flex: 1 0;
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                outline: none;
                            }
                            .iconfont {
                                font-size: $fontSize16;
                                color: #B7C0E3;
                            }
                        }
                    }
                    .products_menu {
                        box-sizing: border-box;
                        padding: 2.4rem 4.8rem;
                        height: 31.2rem;
                        background: #F5F6FB;
                        overflow-y: auto;
                        @media (max-width: 420px) {
                            padding-left: 1.6rem;
                            padding-right: 1.6rem;
                        }
                        .product_type_list {

                            .product_type_item {
                                margin-top: 3.2rem;
                                &:first-child {
                                    margin-top: 0;
                                }
                                .type_wrap {
                                    display: flex;
                                    align-items: center;
                                    height: 2.4rem;
                                    border-bottom: 0.1rem solid #EDEDED;
                                    .iconfont {
                                        font-size: $fontSize14;
                                        color: #1677FF;
                                    }
                                    .type {
                                        margin-left: 0.4rem;
                                        font-size: $fontSize14;
                                        font-weight: $fontWeight400;
                                        color: #000;
                                        line-height: 1.4rem;
                                    }
                                }
                                .type_list {
                                    margin-top: 1.1rem;
                                    display: -ms-grid;
                                    display: grid;
                                    grid-template-columns: repeat(3, 1fr);
                                    grid-column-gap: 3.2rem;
                                    grid-row-gap: 1.6rem;
                                    @media (max-width: 586px) {
                                        grid-template-columns: repeat(1, 1fr);
                                    }
                                    .type_item {
                                        .abbreviation {
                                            display: block;
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight500;
                                            color: #0967E9;
                                            line-height: 1.4rem;
                                        }
                                        .intro {
                                            margin-top: 0.8rem;
                                            font-size: $fontSize12;
                                            font-weight: $fontWeight400;
                                            color: rgba(0, 0, 0, 0.75);
                                            line-height: 1.2rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .appscenes_menu {
                        box-sizing: border-box;
                        padding: 2.4rem 4.8rem;
                        background: #F5F6FB;
                        overflow-y: auto;
                        @media (max-width: 420px) {
                            padding-left: 1.6rem;
                            padding-right: 1.6rem;
                            height: 31.2rem;
                        }
                        .appscenes_scene_list {
                            display: -ms-grid;
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-column-gap: 2.4rem;
                            grid-row-gap: 3.5rem;
                            z-index: 100;
                            @media (max-width: 586px) {
                                grid-template-columns: repeat(1, 1fr);
                                grid-row-gap: 2rem;
                            }
                            .appscenes_scene_item {
                                .scene_wrap {
                                    box-sizing: border-box;
                                    padding-bottom: 0.7rem;
                                    line-height: 1.4rem;
                                    border-bottom: 0.1rem solid #EDEDED;
                                    .scene_item {
                                        min-height: 1.4rem;
                                        .iconfont {
                                            font-size: $fontSize14;
                                            color: #1677FF;
                                        }
                                        .scene {
                                            margin-left: 0.4rem;
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight400;
                                            color: #000;
                                            line-height: 1.4rem;
                                        }
                                    }
                                }
                                .scene_text {
                                    display: block;
                                    margin-top: 1.2rem;
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight500;
                                    color: #0967E9;
                                    line-height: 1.4rem;
                                }
                            }
                        }
                    }
                }
            }
            .more {
                box-sizing: border-box;
                padding: 0 4.8rem;
                height: 4.4rem;
                line-height: 4.4rem;
                @media (max-width: 420px) {
                    padding-left: 1.6rem;
                    padding-right: 1.6rem;
                }
                .nav_list_item {
                    display: inline-block;
                    width: 100%;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0, 0, 0, 0.75);
                    line-height: 1.4rem;
                    outline: none;
                    .iconfont {
                        display: inline-block;
                        color: #0967E9;
                    }
                }
            }
        }
    }
    .mobile_white_bg {
        background: #fff;
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
        transition: all .3s linear;
    }
}

.white_bg {
    background: #fff;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
    transition: all .3s linear;
}
</style>