import pluginVue from 'eslint-plugin-vue'

export default [
  // Використовуємо базові правила для Vue
  ...pluginVue.configs['flat/essential'],
  {
    // Додаємо наші власні правила
    rules: {
      'no-console': 'warn', // Буде сваритися на console.log
      'no-unused-vars': 'warn' // Буде сваритися на створені, але не використані змінні [cite: 205]
    }
  }
]