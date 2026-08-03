<template>
    <section>
        <div class="teal-bg">
            <div class="header header-v3">
                <div class="header-starburst">
                    <img src="@/assets/images/Starburst_group_left_Orange-Teal.png" alt="Starbrust Group Left">
                </div>
                <h1>Our Services</h1>
            </div>
        </div>
        <div class="row orange-bg">
            <a href="https://littlefriendsvetservices.securevetsource.com/index.pml"><h1><span class="cta-lead">Click here</span> for our online store <br>home delivery of your pet's medications AND food!</h1></a>
            <div class="image-wrapper">
                <img src="@/assets/images/Businesscard.image4-f1df1fbc.jpg" alt="Businesscard Image">
            </div>
        </div>
    </section>
</template>
<style scoped>
.header h1 {
    color: white;
}
.row.orange-bg {
    display: flex;
    align-items: center;
    height: fit-content;
    padding: 70px 30px;
    gap: 40px;
    justify-content: center;
}
.row.orange-bg h1 {
    color: inherit;
    font-size: 42px;
    max-width: 1000px;
}
.row.orange-bg a {
    color: white;
}
.cta-lead {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
}
.row.orange-bg a:hover h1,
.row.orange-bg a:focus-visible h1 {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
}
.row.orange-bg a:hover .cta-lead,
.row.orange-bg a:focus-visible .cta-lead {
    text-decoration: none;
}
.image-wrapper {
    height: 300px;
    align-self: flex-start;
}
.image-wrapper img {
    height: 100%;
}
@media screen and (max-width: 960px) {
    .row.orange-bg {
        flex-direction: column;
    }
}
</style>
