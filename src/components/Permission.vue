<script setup lang="ts">
import { usePermission } from '@/composables/userPermission';

const props = defineProps<{
  permission?: string
  permissions?: string[]
}>()

const { hasPermission, hasAnyPermission } = usePermission()
const visible = props.permissions ? hasAnyPermission(props.permissions) : props.permission ? hasPermission(props.permission) : false
</script>

<template>
  <slot v-if="visible" />
</template>