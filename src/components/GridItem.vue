<template>
  <div class="grid-item" :class="gridClasses">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GridItem',
  props: {
    sm: {
      type: String,
      default: '12',
    },
    md: {
      type: String,
      default: '',
    },
    lg: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const gridClass = () => {
      let classes = '';

      if (props.sm === 'flex') {
        classes += ' grid-item__sm--flex';
      } else {
        classes += ` grid-item__sm--${props.sm}`;
      }

      if (props.md === 'flex') {
        classes += ' grid-item__md--flex';
      } else {
        classes += ` grid-item__md--${props.md}`;
      }

      if (props.lg === 'flex') {
        classes += ' grid-item__lg--flex';
      } else {
        classes += ` grid-item__lg--${props.lg}`;
      }

      return classes;
    };

    return {
      gridClasses: gridClass(),
    };
  },
});
</script>

<style lang="scss">
@import '../styles/mixins';

.grid-item {
  display: block;
  margin: 0 var(--unit-2);
  margin-bottom: var(--unit-2);

  &__sm {
    &--flex {
      flex: 1;
    }

    &--1 {
      width: calc(8.33% - var(--unit-2));
    }

    &--2 {
      width: calc(16.66% - var(--unit-2));
    }

    &--3 {
      width: calc(25% - var(--unit-2));
    }

    &--4 {
      width: calc(33.33% - var(--unit-2));
    }

    &--5 {
      width: calc(41.66% - var(--unit-2));
    }

    &--6 {
      width: calc(50% - var(--unit-2));
    }

    &--7 {
      width: calc(58.33% - var(--unit-2));
    }

    &--8 {
      width: calc(66.66% - var(--unit-2));
    }

    &--9 {
      width: calc(75% - var(--unit-2));
    }

    &--10 {
      width: calc(83.33% - var(--unit-2));
    }

    &--11 {
      width: calc(91.66% - var(--unit-2));
    }

    &--12 {
      width: calc(100% - var(--unit-2));
    }
  }

  &__md {
    &--flex {
      @include onTablet {
        flex: 1;
      }
    }

    &--1 {
      @include onTablet {
        width: calc(8.33% - var(--unit-2));
      }
    }

    &--2 {
      @include onTablet {
        width: calc(16.66% - var(--unit-2));
      }
    }

    &--3 {
      @include onTablet {
        width: calc(25% - var(--unit-2));
      }
    }

    &--4 {
      @include onTablet {
        width: calc(33.33% - var(--unit-2));
      }
    }

    &--5 {
      @include onTablet {
        width: calc(41.66% - var(--unit-2));
      }
    }

    &--6 {
      @include onTablet {
        width: calc(50% - var(--unit-2));
      }
    }

    &--7 {
      @include onTablet {
        width: calc(58.33% - var(--unit-2));
      }
    }

    &--8 {
      @include onTablet {
        width: calc(66.66% - var(--unit-2));
      }
    }

    &--9 {
      @include onTablet {
        width: calc(75% - var(--unit-2));
      }
    }

    &--10 {
      @include onTablet {
        width: calc(83.33% - var(--unit-2));
      }
    }

    &--11 {
      @include onTablet {
        width: calc(91.66% - var(--unit-2));
      }
    }

    &--12 {
      @include onTablet {
        width: calc(100% - var(--unit-2));
      }
    }
  }

  &__lg {
    &--flex {
      @include onDesktop {
        flex: 1;
      }
    }

    &--1 {
      @include onDesktop {
        width: calc(8.33% - var(--unit-2));
      }
    }

    &--2 {
      @include onDesktop {
        width: calc(16.66% - var(--unit-2));
      }
    }

    &--3 {
      @include onDesktop {
        width: calc(25% - var(--unit-2));
      }
    }

    &--4 {
      @include onDesktop {
        width: calc(33.33% - var(--unit-2));
      }
    }

    &--5 {
      @include onDesktop {
        width: calc(41.66% - var(--unit-2));
      }
    }

    &--6 {
      @include onDesktop {
        width: calc(50% - var(--unit-2));
      }
    }

    &--7 {
      @include onDesktop {
        width: calc(58.33% - var(--unit-2));
      }
    }

    &--8 {
      @include onDesktop {
        width: calc(66.66% - var(--unit-2));
      }
    }

    &--9 {
      @include onDesktop {
        width: calc(75% - var(--unit-2));
      }
    }

    &--10 {
      @include onDesktop {
        width: calc(83.33% - var(--unit-2));
      }
    }

    &--11 {
      @include onDesktop {
        width: calc(91.66% - var(--unit-2));
      }
    }

    &--12 {
      @include onDesktop {
        width: calc(100% - var(--unit-2));
      }
    }
  }
}
</style>
