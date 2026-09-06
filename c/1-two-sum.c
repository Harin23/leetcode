typedef struct {
    int k;
    int j;
    bool used;
} Entry;

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int cap = numsSize * 2;
    Entry* table = calloc(cap, sizeof(Entry));

    for (int i = 0; i < numsSize; i++) {
        unsigned h = (unsigned)nums[i] % cap;
        while (table[h].used) {
            if (table[h].k == nums[i]) {
                int* out = malloc(2 * sizeof(int));
                out[0] = table[h].j;
                out[1] = i;
                *returnSize = 2;
                free(table);
                return out;
            }
            h = (h + 1) % cap;
        }
        unsigned g = (unsigned)(target - nums[i]) % cap;
        while (table[g].used) g = (g + 1) % cap;
        table[g] = (Entry){ .k = target - nums[i], .j = i, .used = true };
    }

    *returnSize = 0;
    free(table);
    return NULL;
}
