---
sidebar_position: 4
---

# SQS / SNS Batch Message Fields

## `Id` (Batch Entry Identifier)

A **client-side label** you assign to each entry in a batch request (1–80 chars, alphanumeric + hyphens).

AWS uses it to correlate results back to your entries in the response. When the batch returns `Successful` and `Failed` arrays, each item has an `Id` matching what you sent — that's how you know which specific messages failed vs succeeded.

```ts
Entries: messages.map((message) => ({
  Id: message.messageId, // your label for result correlation
  MessageBody: message.messageBody,
}));

// In response:
results.Failed?.forEach((failure) => {
  if (failure.Id) failedMessageIds.push(failure.Id); // same Id comes back
});
```

Scoped to the batch request only. AWS does not store or use it for anything else. **Not** the same as the SQS `MessageId` AWS assigns after the message is enqueued.

---

## `MessageGroupId` _(FIFO only)_

Groups messages into an ordered sequence. All messages with the same group ID are delivered in order, one at a time. Different group IDs are processed in parallel.

Use a meaningful key tied to the logical entity — e.g. `contactId`, `invoiceId` — so related messages stay ordered without blocking unrelated groups.

---

## `MessageDeduplicationId` _(FIFO only)_

AWS uses this to suppress duplicates within a **5-minute window**. If two messages arrive with the same dedup ID in that window, the second is silently dropped.

Should be unique per logical operation:

```
`${invoiceId}${contactId}-reminderNotification`
```

Can be omitted if content-based deduplication is enabled on the queue/topic (AWS hashes `MessageBody` instead).

---

## Summary

| Field                    | Required    | Scope        | Purpose                                        |
| ------------------------ | ----------- | ------------ | ---------------------------------------------- |
| `Id`                     | Yes (batch) | Request only | Correlates batch results back to your entries  |
| `MessageGroupId`         | FIFO only   | Queue/topic  | Ordering + parallelism isolation across groups |
| `MessageDeduplicationId` | FIFO only   | 5-min window | Idempotency / duplicate suppression            |

Standard (non-FIFO) queues and topics ignore `MessageGroupId` and `MessageDeduplicationId` entirely.
