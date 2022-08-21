<template>
  <div
    class="expenses-chart-data-bar"
    :class="isMax ? 'expenses-chart-data-bar--max' : ''"
    :style="{ height: `${height}px` }"
  >
    <div class="expenses-chart-data-bar__popup-box">
      ${{ value }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  height: {
    type: Number,
    required: true,
  },
  isMax: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped>
.expenses-chart-data-bar {
  $self: &;
  position: relative;

  width: 30px;

  background-color: $red;
  border-radius: 3px;
  transition: background-color 150ms ease-out;
  cursor: pointer;

  @media screen and (min-width: $sm) {
    width: 33px;
  }

  @media screen and (min-width: $lg) {
    width: 50px;

    border-radius: 5px;
  }

  &--max {
    background-color: $cyan;

    &:hover {
      background-color: rgba($cyan, 0.6) !important;
    }
  }

  &:hover {
    background-color: rgba($red, 0.6);

    #{ $self }__popup-box {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  &__popup-box {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);

    padding: 8px;

    opacity: 0;
    background-color: $dark-brown;
    transform: translate(-50%, 50%);
    transition: opacity 150ms 100ms cubic-bezier(0, 0, .19, 1.05),
                transform 250ms 100ms cubic-bezier(0, 0, .19, 1.05);
    border-radius: 5px;

    font-size: 0.9rem;
    font-weight: 700;
    color: $white;

    z-index: 1;

    @media screen and (min-width: $lg) {
      font-size: 1.125rem;
    }
  }
}
</style>
