<template>
    <section id="meet-dr-liane">
        <div class="header header-v2">
            <div class="header-starburst">
                <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="">
            </div>
            <h1>Dr. Liane Underwood</h1>
        </div>
        <div class="body-content">
            <div class="row">
                <div class="row-item">
                    <h1>Who We Are</h1>
                    <div class="text-wrapper">
                        <p>
                            I’m a local girl, having spent much of my childhood tromping about in the woods around Old Forge at my Grandparent’s camp. My husband, Pat, is a local boy from Rome. We live on the Moose River here in Lyons Falls in a little cabin we built next to the river – our favorite place! We are experienced whitewater kayakers and paddle the Moose regularly. We love the Northcountry, and enjoy gardening, hiking, snowshoeing, fishing and hunting as well as paddling.
                        </p>
                        <p>
                            I graduated from veterinary school in 1996 and have lots of experience over the years to make Little Friends the very best choice to care for your pet. I’m experienced in preventative care, internal medicine, behavior medicine, surgery and emergency care for both dogs and cats. I have a special interest in feline medical, surgical, behavioral and dental issues with advanced training in these topics. At Little Friends, we also care for “exotic” pets such as reptiles, small mammals and birds.
                        </p>
                    </div>
                </div>
                <div class="row-item image-item">
                    <div class="image-wrapper">
                        <img src="@/assets/images/Liane_and_Patrick_01.jpg" alt="Liane and Patrick" loading="lazy" decoding="async">
                    </div>
                </div>
                <div class="row-item">
                    <h1>What Makes Us Different</h1>
                    <div class="text-wrapper">
                        <p>
                            We offer the very best care for your pet in a stress-free environment. We have a small, quiet office and take one appointment at a time so you and your pet can focus on your visit, not worry about other animals or people in a crowded waiting area. Dr. Underwood devotes a FULL HALF-HOUR to you and your pet - not 15 or 20 minutes like many other veterinary offices! We focus on what is best for you and your pet – offering options for all budgets. You will always have the same doctor to care for your pet so we always know what’s going on and we do our best to get to know the families who come to us. We give you the time you and your pet deserve, one-on-one, with knowledge and care in a pleasant environment. We support our community with donations to school and community causes – we love our baseball and softball teams! – and we enjoy taking part in community events. Little Friends is YOUR small-town veterinarian!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 70px 30px;
}
.header-v2 h1 {
    border-bottom: 2px solid #e5e5e5;
}
.row {
    gap: 40px;
}
.row-item {
    flex: 1;
}
.text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--page-text);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.65;
}
.image-item {
    flex: 0;
}
.row-item h1 {
    text-align: center;
    font-family: 'Galada';
    margin-bottom: 20px;
    color: var(--heading-text);
    font-size: 32px;
}
.image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 1000px) {
    .row {
        flex-direction: column;
    }
}
</style>
