<script setup lang="ts">
import { useRoute } from 'vue-router'
import MaterialSymbolsArrowOutward from '~icons/material-symbols/arrow-outward'
import MaterialSymbolsImageOutline from '~icons/material-symbols/image-outline'
import { useSuggestion } from '@/composables/suggestion'
import { STATUS_MAP } from '@/utils'
import { black, brown, gray, green, indigo, yellow } from '@/utils/colors.stylex'
import { fonts } from '@/utils/fonts.stylex'

const { params: { id } } = useRoute()
const { data } = await useSuggestion(id as string)

const styles = defineStyleX({
  main: {
    inlineSize: '100%',
    maxInlineSize: '72rem',
    marginInline: 'auto',
    paddingBlockStart: '2rem',
    paddingBlockEnd: '5rem',
    paddingInline: '1.5rem',
    boxSizing: 'border-box',
  },
  headingRow: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBlockEnd: '1.5rem',
  },
  title: {
    marginBlock: 0,
    color: black.text,
    fontFamily: fonts.interface,
    fontSize: 'clamp(3rem, 9vw, 7rem)',
    fontWeight: 800,
    lineHeight: 0.78,
    letterSpacing: '-0.05em',
    textTransform: 'uppercase',
  },
  ticketId: {
    display: 'inline-block',
    marginBlockStart: '0.5rem',
    paddingBlock: '0.25rem',
    paddingInline: '0.5rem',
    backgroundColor: indigo.background,
    color: black.contrast2,
    fontFamily: fonts.interface,
    fontSize: '1rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    transform: 'rotate(-1.5deg)',
  },
  status: {
    flexShrink: 0,
    paddingBlock: '0.55rem',
    paddingInline: '0.9rem',
    color: black.text,
    borderColor: black.background,
    borderStyle: 'solid',
    borderWidth: '3px',
    fontFamily: fonts.interface,
    fontSize: '1.1rem',
    fontWeight: 800,
    transform: 'rotate(2deg)',
  },
  statusOpen: {
    backgroundColor: gray[9],
  },
  statusInProgress: {
    backgroundColor: brown[7],
  },
  statusRejected: {
    backgroundColor: gray[5],
    color: black.contrast,
  },
  statusResolved: {
    backgroundColor: green[6],
  },
  sheet: {
    borderColor: black.background,
    borderStyle: 'solid',
    borderWidth: '4px',
    backgroundColor: yellow.background,
    boxShadow: '12px 12px 0 #261D11',
  },
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    borderBlockEndColor: black.background,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: '4px',
  },
  metaItem: {
    minInlineSize: 0,
    paddingBlock: '1rem',
    paddingInline: '1.25rem',
  },
  metaItemFirst: {
    borderInlineEndColor: black.background,
    borderInlineEndStyle: 'solid',
    borderInlineEndWidth: '4px',
  },
  metaItemUpper: {
    borderBlockEndColor: black.background,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: '4px',
  },
  label: {
    display: 'block',
    marginBlockEnd: '0.35rem',
    color: black.text,
    fontFamily: fonts.interface,
    fontSize: '0.75rem',
    fontWeight: 800,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  value: {
    color: black.text,
    fontFamily: fonts.interface,
    fontSize: '1rem',
    overflowWrap: 'anywhere',
  },
  userValue: {
    color: indigo.background,
    fontFamily: fonts.userContent,
    fontSize: '1rem',
    overflowWrap: 'anywhere',
  },
  referrer: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  section: {
    paddingBlock: '2rem',
    paddingInline: '2rem',
  },
  content: {
    color: black.text,
    fontFamily: fonts.userContent,
    fontSize: '1.125rem',
    lineHeight: 1.75,
    overflowWrap: 'anywhere',
  },
  gallerySection: {
    paddingBlockStart: '1.5rem',
    paddingBlockEnd: '2rem',
    paddingInline: '2rem',
    borderBlockStartColor: black.background,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: '4px',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBlockStart: 0,
    marginBlockEnd: '1rem',
    color: black.text,
    fontFamily: fonts.interface,
    fontSize: '1.5rem',
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))',
    gap: '1rem',
  },
  image: {
    display: 'block',
    inlineSize: '100%',
    blockSize: 'auto',
    borderColor: black.background,
    borderStyle: 'solid',
    borderWidth: '3px',
    backgroundColor: gray[9],
  },
})
</script>

<template>
  <main v-if="data" v-stylex="styles.main">
    <div v-stylex="styles.headingRow">
      <div>
        <h1 v-stylex="styles.title">
          Ticket<br>Details
        </h1>
        <code v-stylex="styles.ticketId">{{ data.id }}</code>
      </div>
      <span
        v-stylex="(
          styles.status,
          data.status === 'OPEN' && styles.statusOpen,
          data.status === 'IN_PROGRESS' && styles.statusInProgress,
          data.status === 'REJECTED' && styles.statusRejected,
          data.status === 'RESOLVED' && styles.statusResolved
        )"
      >
        {{ STATUS_MAP[data.status] }}
      </span>
    </div>

    <article v-stylex="styles.sheet">
      <div v-stylex="styles.metaGrid">
        <div v-stylex="(styles.metaItem, styles.metaItemFirst, styles.metaItemUpper)">
          <span v-stylex="styles.label">创建时间</span>
          <time v-stylex="styles.value">{{ data.createdAt }}</time>
        </div>
        <div v-stylex="(styles.metaItem, styles.metaItemUpper)">
          <span v-stylex="styles.label">更新时间</span>
          <time v-stylex="styles.value">{{ data.updatedAt }}</time>
        </div>
        <div v-stylex="(styles.metaItem, styles.metaItemFirst)">
          <span v-stylex="styles.label">关联页面</span>
          <a
            v-if="data.referrer"
            v-stylex="(styles.userValue, styles.referrer)"
            :href="data.referrer"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ data.referrer }} <MaterialSymbolsArrowOutward aria-hidden="true" />
          </a>
          <span v-else v-stylex="styles.userValue">—</span>
        </div>
        <div v-if="data.relatedTo" v-stylex="styles.metaItem">
          <span v-stylex="styles.label">关联意见</span>
          <span v-stylex="styles.userValue">{{ data.relatedTo || '—' }}</span>
        </div>
      </div>

      <section v-stylex="styles.section">
        <span v-stylex="styles.label">内容</span>
        <div v-stylex="styles.content" v-html="data.content" />
      </section>

      <section v-if="data.images.length" v-stylex="styles.gallerySection">
        <h2 v-stylex="styles.sectionTitle">
          <MaterialSymbolsImageOutline aria-hidden="true" /> 附件
        </h2>
        <div v-stylex="styles.gallery">
          <img
            v-for="(image, index) in data.images"
            :key="image.id"
            v-stylex="styles.image"
            :alt="`Ticket attachment ${index + 1}`"
            :src="`/api/v1/image/${image.id}`"
            loading="lazy"
          >
        </div>
      </section>
    </article>
  </main>
</template>
