import { useState, useEffect } from 'react'
import { useAppContext } from '../AppProvider'

type HederaAddressInputProps = {
  onValidChange?: (value: string | null) => void
}

export default function HederaAddressInput({
  onValidChange,
}: HederaAddressInputProps) {
  const { accountId, setAccountId } = useAppContext()
  const [touched, setTouched] = useState(false)

  // Suggested addresses
  const suggestedAddresses = ['0.0.6941561', '0.0.6941568', '0.0.6941611']

  // validators
  const isAccountId = (s: string): boolean => {
    if (!/^\d+\.\d+\.\d+$/.test(s)) return false
    const parts = s.split(".")
    if (parts.some((p) => p.length > 20)) return false
    return true
  }

  const isEvmAddress = (s: string): boolean => {
    return /^0x[0-9a-fA-F]{40}$/.test(s);
  };

  const validate = (s: string): { valid: boolean; reason: string } => {
    const trimmed = (s || "").trim();
    if (trimmed === "")
      return { valid: false, reason: "Address is required." };
    if (isAccountId(trimmed) || isEvmAddress(trimmed)) {
      return { valid: true, reason: "" };
    }
    if (trimmed.startsWith("0x")) {
      return {
        valid: false,
        reason: "EVM addresses must be 0x followed by 40 hex characters.",
      };
    }
    if (trimmed.includes(".")) {
      return {
        valid: false,
        reason:
          "Account ID must be in the form shard.realm.account (e.g. 0.0.54321).",
      };
    }
    return {
      valid: false,
      reason:
        "Invalid format. Use Hedera account id (shard.realm.account) or an EVM address (0x...).",
    };
  };

  const { valid, reason } = validate(accountId);

  useEffect(() => {
    if (onValidChange) {
      onValidChange(valid ? accountId.trim() : null)
    }
  }, [valid, accountId, onValidChange])

  const inputBase = "mt-2 w-full border rounded p-2 text-sm focus:outline-none focus:ring-2"

  const inputClass = valid
    ? `${inputBase} ring-green-400 border-green-600`
    : touched && !valid
    ? `${inputBase} ring-red-400 border-red-600`
    : `${inputBase} ring-blue-400 border-gray-300`

  return (
    <div className="max-w-md">
      <input
        type="text"
        value={accountId}
        placeholder="0.0.54321"
        aria-label="Hedera account or EVM address"
        aria-invalid={touched && !valid}
        onChange={(e) => setAccountId(e.target.value)}
        onBlur={() => setTouched(true)}
        className={inputClass}
        list="suggested-addresses" // Link to the datalist
      />
      <datalist id="suggested-addresses">
        {suggestedAddresses.map((address) => (
          <option key={address} value={address} />
        ))}
      </datalist>

      <div className="mt-2 text-sm">
        {touched && !valid ? (
          <p className="text-red-600" role="alert">
            {reason}
          </p>
        ) : (
          <p className="text-gray-500">
            Accepts Hedera account IDs (shard.realm.account) or EVM addresses
            (0x...). Example:{" "}
            <code className="bg-gray-100 px-1 rounded">0.0.54321</code>
          </p>
        )}
      </div>
    </div>
  );
}
