<template>
    <section>
        <div class="content-container fixed-bg fbc-container">
            <div class="content-wrapper">
                <div class="text-wrapper">
                    <h1>Feline behavior services</h1>
                    <ul>
                        <li>
                            Declawing cats is now illegal in NY. At Little Friends, we can help with alternatives and guidance on managing scratching behaviors. Dr. Liane is your local feline expert!
                        </li>
                        <li>
                            Special focus on feline behavior issues – we offer behavioral consultations for cats for problems such as inappropriate elimination (not using the litter box) and aggression.
                        </li>
                    </ul>
                </div>
                <div class="image-wrapper">
                    <img src="@/assets/images/Mousie_claws.jpg" alt="Mousie Claws">
                </div>
            </div>
        </div>
        <div class="content-container orange-bg orange-container">
            <div class="content-wrapper">
                <img src="@/assets/images/Starburst_group_right_Orange-Teal.png" alt="Starbrust Group Right" class="starburst">
                <div class="image-wrapper">
                    <img src="@/assets/images/IMG_7444.jpg">
                </div>
                <div class="text-wrapper">
                    <h1>Little Friends and Purina Vet Direct are teaming up for you...</h1>
                    <p>
                        Order the very best food recommended by Dr. Liane for your little friend - both prescription and healthy pet diets - with convenient free delivery directly to your home!
                    </p>
                    <p>
                        <a href="https://www.proplanvetdirect.com/"><b>Click Here</b></a> and enter enter Clinic ID: <b>5NE5D</b> when you sign up.
                    </p>
                    <p>
                        <i>It could not be any easier!</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="content-container fixed-bg panks-container">
            <div class="content-wrapper">
                <div class="image-wrapper">
                    <img src="@/assets/images/panks-says-hey.jpg" alt="Panks Says Hey">
                </div>
                <div class="text-wrapper">
                    <h1>Panks says HEY!</h1>
                    <p>
                        Remember at Little Friends we offer our Community Spay and Neuter program for cats all the time and there is no need to qualify - it's for everyone!
                    </p>
                    <p class="notice">
                        The program includes a full examination, surgery, pain medication, vaccinations and dewormer!
                    </p>
                    <p class="notice">
                        Cost is just $195 for male cats and $315 for female cats
                    </p>
                    <p>
                        <strong>Call today for an appointment!</strong> 315-348-6389
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
a b {
    font-weight: 500;
}
b, strong {
    font-weight: 900;
}
section {
    font-size: 24px;
}

.starburst {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
}

.fbc-container {
    background-image: url("@/assets/images/catphoto_left.jpg");
}
.panks-container {
    background-image: url("@/assets/images/catphoto_right.jpg");
}

.fixed-bg {
    color: white;
}

.content-container {
    width: 100%;
    min-height: 500px;
}

.orange-container {
    position: relative;
    padding: 70px 40px;
    min-height: unset;
    height: auto;
    color: #333;
}
.orange-container h1 {
    font-size: 52px;
}
.orange-container .content-wrapper {
    background: white;
    position: relative;
    align-items: stretch;
    justify-content: start;
    height: fit-content;
    padding: 0;
    gap: 0;
}
.orange-container .image-wrapper {
    /* height: fit-content; */
    overflow: hidden;
    flex-shrink: 0;
    min-width: 350px;
}
.orange-container .content-wrapper .image-wrapper img {
    width: 350px;
    height: 100%;
    object-fit: cover;
    display: block;
}
.orange-container .text-wrapper {
    padding: 30px;
}
@media screen and (max-width: 1000px) {
    .orange-container .image-wrapper {
        display: none;
    }
}

.content-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--golden-bg);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    gap: 40px;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.fixed-bg .text-wrapper {
    max-width: 900px;
}
.fixed-bg ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.fixed-bg .text-wrapper h1 {
    font-size: 64px;
}
.fixed-bg .text-wrapper p.notice {
    font-size: 16px;
}
.fixed-bg .image-wrapper {
    height: 300px;
}
.fixed-bg .image-wrapper img {
    height: 100%;
    border-radius: 0.5rem;
}
@media screen and (max-width:1200px) {
    .fixed-bg .text-wrapper h1 {
        font-size: 56px;
    }
}
@media screen and (max-width:960px) {
    .fixed-bg .text-wrapper h1 {
        font-size: 46.2px;
    }
    .content-wrapper {
        position: static; /* or relative */
        flex-direction: column;
        height: auto;
        padding: 40px;
    }
    .content-container {
        min-height: unset;
        height: auto;
    }
    .image-wrapper {
        align-self: flex-start;
    }
    .orange-container h1 {
        font-size: 41.6px;
    }
}
</style>