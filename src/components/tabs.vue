<template>
    <div class="products-tabs">
        <div class="menu-tabs">
            <button class="btn-tabs"  v-on:click="activetab=1" :class="[ activetab === 1 ? 'active' : '' ]">
                DESCRIPTION
            </button>
            <button class="btn-tabs" v-on:click="activetab=2" :class="[ activetab === 2 ? 'active' : '' ]">
                VIDEO
            </button>
            <button class="btn-tabs" v-on:click="activetab=3" :class="[ activetab === 3 ? 'active' : '' ]">
                SIZE &amp; SPECS
            </button>
            <button class="btn-tabs" v-on:click="activetab=4" :class="[ activetab === 4 ? 'active' : '' ]">
                DELIVERY &amp; RETURNS
            </button>
            <button class="btn-tabs" v-on:click="activetab=5" :class="[ activetab === 5 ? 'active' : '' ]">
                REVIEWS
            </button>
        </div>

        <div class="content">
            <div v-if="activetab === 1" class="tabcontent">
                <h4>1Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                <h4>2Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
            <div v-if="activetab === 3" class="tabcontent">
                <h4>3Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
            <div v-if="activetab === 4" class="tabcontent">
                <h4>4Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
            <div v-if="activetab === 5" class="tabcontent">
                <h4>5Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "tabs",
    data() {
        return {
            activetab: 1
        }
    }
  }
</script>
