<script setup lang="ts">
import { about, cases, identity, principles, writing } from '~/data/portfolio'
import { vReveal } from '~/directives/reveal'
</script>

<template>
  <main id="top" class="max-w-page px-gutter relative z-1 mx-auto">
    <PageSection first class="pt-4 pb-24">
      <StatusDot label="Open to remote frontend roles" class="mb-8" />
      <h1 class="font-display text-hero m-0 mb-8 max-w-[800px] font-medium text-pretty">
        I ship production frontends that stay fast, accessible, and easy to change.
      </h1>
      <p class="text-muted text-lead max-w-copy m-0 mb-8 leading-[1.55] text-pretty">
        Hussein Samy — frontend engineer, three years of React, Next.js and Angular in production.
        Strong core JavaScript under the framework, and I own every line I ship.
      </p>
      <p class="text-muted m-0 mb-12 font-mono text-label tracking-mono">
        {{ identity.availability }}
      </p>
      <div class="flex flex-wrap items-center gap-6">
        <AppButton variant="primary" href="#work">View my work</AppButton>
        <AppButton variant="ghost" :href="identity.cv" download>Download CV (PDF)</AppButton>
      </div>
    </PageSection>

    <!-- Plain rhythm: a 160px sticky mono label in a left rail beside the content. -->
    <PageSection id="work" v-reveal>
      <div class="flex flex-wrap gap-x-16 gap-y-8">
        <div class="flex-[0_0_var(--spacing-rail)]">
          <div class="sticky top-24"><EyebrowLabel>01 / Selected work</EyebrowLabel></div>
        </div>
        <div class="grid min-w-0 flex-[1_1_480px] gap-6">
          <CaseCard
            v-for="item in cases"
            :key="item.slug"
            :to="`/work/${item.slug}`"
            :title="item.title"
            :meta="item.meta"
            :summary="item.summary"
            :tags="item.tags"
          />
        </div>
      </div>
    </PageSection>

    <PageSection id="how" variant="panel" v-reveal>
      <SectionHead
        label="02 / How I work"
        framing="Five commitments, not aspirations. Step through them — this is what working with me looks like from another time zone."
      />
      <PrincipleStepper :steps="principles" />
    </PageSection>

    <PageSection id="writing" v-reveal>
      <SectionHead
        label="03 / Writing"
        framing="Notes on things I had to debug properly before I understood them."
      />
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        <ArticleCard
          v-for="item in writing"
          :key="item.title"
          :href="item.href"
          :meta="item.meta"
          :title="item.title"
          :summary="item.summary"
        />
      </div>
    </PageSection>

    <PageSection id="about" variant="panel" class="flex flex-wrap gap-x-16 gap-y-8" v-reveal>
      <div class="flex-[0_0_var(--spacing-rail)]"><EyebrowLabel>04 / About</EyebrowLabel></div>
      <div class="max-w-copy min-w-0 flex-[1_1_480px]">
        <p class="text-lead leading-body m-0 mb-8 text-pretty">{{ about.summary }}</p>
        <AppButton variant="secondary" to="/about" class="bg-bg">Read the whole story</AppButton>
      </div>
    </PageSection>

    <PageSection id="contact" class="flex flex-wrap gap-x-16 gap-y-12 pb-32" v-reveal>
      <div class="min-w-0 flex-[1_1_360px]">
        <EyebrowLabel class="mb-6">05 / Contact</EyebrowLabel>
        <h2 class="font-display text-display leading-display m-0 mb-6 font-medium text-pretty">
          Open to remote frontend roles.
        </h2>
        <p class="text-muted text-prose m-0 mb-8 max-w-[40ch] text-pretty">
          Full-time or contract, from Cairo on UTC+3. Send a connection request and tell me what you
          are building.
        </p>
        <div class="flex flex-wrap gap-4">
          <AppButton variant="primary" :href="identity.linkedin">
            <template #icon><AppIcon name="linkedin" :size="16" :stroke="2" /></template>
            Connect on LinkedIn
          </AppButton>
          <AppButton variant="secondary" :href="`mailto:${identity.email}`">
            <template #icon><AppIcon name="mail" :size="16" /></template>
            Email me
          </AppButton>
        </div>
      </div>
      <div
        class="grid min-w-0 flex-[1_1_360px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] content-start gap-4"
      >
        <ContactTile
          :href="`mailto:${identity.email}`"
          icon="mail"
          label="Email"
          :value="identity.email"
        />
        <ContactTile :href="identity.cv" icon="download" label="CV" value="Hussein_Samy_CV.pdf" />
        <ContactTile
          :href="identity.linkedin"
          icon="linkedin"
          label="LinkedIn"
          value="in/hussein-samy"
        />
        <ContactTile
          :href="identity.github"
          icon="repo"
          label="GitHub"
          value="github.com/husseinsamy"
        />
      </div>
    </PageSection>
  </main>
</template>
