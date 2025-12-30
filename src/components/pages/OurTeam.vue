<template>
    <div class="coming-soon">
        <h1>{{ $t('tim.stranica_u_pripremi') }}</h1>
        <h5>{{ $t('tim.molimo_vas') }}</h5>
    </div>
</template>

<script>
export default {
    name: "OurTeam"
}
</script>

<style scoped>
.coming-soon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 70vh;
    padding: 2rem;
    background: #f6f6f8;
    color: #2b54ab;
}

.coming-soon h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.coming-soon p {
    font-size: 1.2rem;
    line-height: 1.5;
}

@media (max-width: 600px) {
    .coming-soon h1 {
        font-size: 2rem;
    }

    .coming-soon p {
        font-size: 1rem;
    }
}
</style>
