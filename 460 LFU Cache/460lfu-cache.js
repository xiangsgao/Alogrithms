// cant solve because this question is freaking annoying.
// ask chatgpt what this actually means

class LFUCache {
  constructor(capacity) {
    this.cache = new Map(); // key -> [frequency, value]
    this.frequencies = new Map(); // frequency -> Set of keys
    this.minf = 0;
    this.capacity = capacity;
  }

  insert(key, frequency, value) {
    this.cache.set(key, [frequency, value]);
    if (!this.frequencies.has(frequency)) {
      this.frequencies.set(frequency, new Set());
    }
    this.frequencies.get(frequency).add(key);
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const [frequency, value] = this.cache.get(key);
    const keys = this.frequencies.get(frequency);
    keys.delete(key);

    if (keys.size === 0) {
      this.frequencies.delete(frequency);
      if (this.minf === frequency) {
        this.minf++;
      }
    }

    this.insert(key, frequency + 1, value);
    return value;
  }

  put(key, value) {
    if (this.capacity <= 0) return;

    if (this.cache.has(key)) {
      const [frequency] = this.cache.get(key);
      this.cache.set(key, [frequency, value]); // Update value only
      this.get(key); // Increase frequency
      return;
    }

    if (this.cache.size === this.capacity) {
      const keys = this.frequencies.get(this.minf);
      const keyToDelete = keys.values().next().value;
      keys.delete(keyToDelete);
      if (keys.size === 0) {
        this.frequencies.delete(this.minf);
      }
      this.cache.delete(keyToDelete);
    }

    this.minf = 1;
    this.insert(key, 1, value);
  }
}