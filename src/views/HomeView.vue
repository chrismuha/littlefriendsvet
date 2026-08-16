<script setup>
import Cover from '@/components/home/Cover.vue';
// import FelineServices from '@/components/home/FelineServices.vue';
// import FelineBoarding from '@/components/home/FelineBoarding.vue';
import ForYou from '@/components/home/ForYou.vue';
import ForYouButtons from '@/components/home/ForYouButtons.vue';
import Information from '@/components/home/Information.vue';
import Notice from '@/components/home/Notice.vue';
// import Slideshow from '@/components/home/Slideshow.vue';
import PrepareForVisit from '@/components/home/PrepareForVisit.vue';
// import AdvancedImaging from '@/components/home/AdvancedImaging.vue';
import ServicesWeOffer from '@/components/home/ServicesWeOffer.vue';
// import PhotoGrid1 from '@/components/home/PhotoGrid1.vue';
// import PhotoGrid2 from '@/components/home/PhotoGrid2.vue';
import Parasite from '@/components/home/Parasite.vue';
// import ContactUs from '@/components/ContactUs.vue';
import FooterSection from '@/components/FooterSection.vue';
import ServicesOffered from '@/components/home/ServicesOffered.vue';
import AreasServed from '@/components/home/AreasServed.vue';
import OnlineStore from '@/components/home/OnlineStore.vue';

</script>

<template>
    <Cover />
    <!-- <Notice /> -->
    <ForYouButtons />
    <ForYou />
    <AreasServed />
    <ServicesOffered />
    <ServicesWeOffer />
    <OnlineStore />
    <!-- <Slideshow /> -->
    <Information />
    <PrepareForVisit />
    <!-- <FelineBoarding /> -->
    <!-- <FelineServices /> -->
    <!-- <AdvancedImaging /> -->
    <!-- <PhotoGrid1 /> -->
    <Parasite />
    <!-- <PhotoGrid2 /> -->
    <!-- <ContactUs /> -->
    <FooterSection />
</template>
