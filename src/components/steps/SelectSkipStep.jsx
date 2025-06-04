import { useState, useCallback } from "react"
import { useStepContext } from "../../hooks/useContext"
import { useSkipData } from "../../hooks/useSkipData"
import PageHeader from "../PageHeader"
import SkipListing from "../SkipListing"
import SelectionModal from "../SelectionModal"

const SelectSkipStep = () => {
  const { selectedSkip, setSelectedSkip } = useStepContext()
  const [showModal, setShowModal] = useState(false)
  const { skips, loading, error, hasMore, loadMore } = useSkipData()

  const handleSkipSelect = useCallback(
    (skip) => {
      if (!skip.allows_heavy_waste) return

      const isSelected = selectedSkip?.id === skip.id
      setSelectedSkip(isSelected ? null : skip)
      setShowModal(!isSelected)
    },
    [selectedSkip, setSelectedSkip],
  )

  const handleModalClose = useCallback(() => {
    setShowModal(false)
    setSelectedSkip(null)
  }, [setSelectedSkip])

  return (
    <div>
      <PageHeader title="Choose Your Skip Size" subtitle="Select the skip size that best suits your needs" />

      <SkipListing
        skips={skips}
        loading={loading}
        error={error}
        hasMore={hasMore}
        onLoadMore={loadMore}
        selectedSkip={selectedSkip}
        onSkipSelect={handleSkipSelect}
      />

      {showModal && selectedSkip && <SelectionModal skip={selectedSkip} onClose={handleModalClose} />}
    </div>
  )
}

export default SelectSkipStep
