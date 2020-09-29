# typed: true

module Kuby
  class TrailingHash < Hash
    extend T::Sig
    extend T::Generic

    K = type_member
    V = type_member

    sig { params(block: T.nilable(T.proc.params(key: K, value: V).void)).void }
    def each(&block)
      return to_enum(T.must(__method__)) unless block_given?

      seen_keys = []
      keys_before = keys

      until keys_before.empty?
        keys_before.each do |k|
          yield k, T.must(self[k])
          seen_keys << k
        end

        keys_before = keys - seen_keys
      end
    end
  end
end
