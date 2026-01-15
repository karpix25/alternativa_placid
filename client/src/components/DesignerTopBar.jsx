import React from 'react';
import { Save, Grid3X3, Grid, Lock, Unlock, Globe, Undo2, Redo2, ChevronLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Tooltip from './Tooltip';

export default function DesignerTopBar({
  presets,
  templateName,
  onTemplateNameChange,
  canvasSize,
  onSizeChange,
  sizePreset,
  onPresetChange,
  lockDimensions,
  onToggleLock,
  showGrid,
  onToggleGrid,
  transparentBackground,
  onToggleTransparent,
  onSave,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onBack,
}) {
  const { t, language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className="h-20 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] px-6 flex items-center justify-between gap-6">
      <div className="flex items-center gap-2 flex-1">
        <button
          onClick={onBack}
          className="p-2 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <Tooltip text={t('tooltips.topbar.templateName')}>
          <input
            type="text"
            value={templateName}
            onChange={(e) => onTemplateNameChange(e.target.value)}
            className="text-sm font-bold text-[var(--text-primary)] bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg px-3 py-1.5 w-40 focus:outline-none focus:border-[var(--accent-color)] transition-all"
            placeholder={t('topbar.templateName')}
          />
        </Tooltip>

        <Tooltip text={t('tooltips.topbar.preset')}>
          <select
            value={sizePreset}
            onChange={(e) => onPresetChange(e.target.value)}
            className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg px-2 py-1.5 text-xs text-[var(--text-secondary)] focus:outline-none transition-all"
          >
            {presets.map((preset) => (
              <option key={preset.value} value={preset.value}>
                {t(`topbar.${preset.value}`) || preset.label}
              </option>
            ))}
          </select>
        </Tooltip>

        <div className="flex items-center gap-1">
          <Tooltip text={t('topbar.width')}>
            <input
              type="number"
              value={canvasSize.width}
              onChange={(e) => onSizeChange('width', parseInt(e.target.value, 10))}
              className="w-16 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg px-2 py-1.5 text-xs text-[var(--text-primary)] focus:outline-none transition-all"
              min="100"
            />
          </Tooltip>
          <Tooltip text={t('tooltips.topbar.lockDimensions')}>
            <button
              type="button"
              onClick={onToggleLock}
              className={`border rounded-lg p-1.5 transition-all ${lockDimensions ? 'bg-[var(--accent-color)] border-[var(--accent-color)] text-white' : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-secondary)]'}`}
            >
              {lockDimensions ? <Lock size={12} /> : <Unlock size={12} />}
            </button>
          </Tooltip>
          <Tooltip text={t('topbar.height')}>
            <input
              type="number"
              value={canvasSize.height}
              onChange={(e) => onSizeChange('height', parseInt(e.target.value, 10))}
              className="w-16 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg px-2 py-1.5 text-xs text-[var(--text-primary)] focus:outline-none transition-all"
              min="100"
            />
          </Tooltip>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Tooltip text={language === 'ru' ? 'EN' : 'RU'}>
          <button
            type="button"
            onClick={toggleLanguage}
            className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg px-2 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
          >
            {language.toUpperCase()}
          </button>
        </Tooltip>

        <Tooltip text={showGrid ? 'Hide Grid' : 'Show Grid'}>
          <button
            type="button"
            onClick={onToggleGrid}
            className={`border rounded-lg p-1.5 transition-all ${showGrid ? 'bg-[var(--accent-color)] border-[var(--accent-color)] text-white' : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-secondary)]'}`}
          >
            {showGrid ? <Grid3X3 size={14} /> : <Grid size={14} />}
          </button>
        </Tooltip>

        <Tooltip text={transparentBackground ? "Transparent BG" : "White BG"}>
          <button
            type="button"
            onClick={onToggleTransparent}
            className={`border rounded-lg p-1.5 transition-all ${transparentBackground ? 'bg-[var(--accent-color)] border-[var(--accent-color)] text-white' : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-secondary)]'}`}
          >
            <Grid size={14} />
          </button>
        </Tooltip>

        <div className="flex items-center gap-1 border-r border-[var(--border-color)] pr-2 mr-1">
          <Tooltip text={t('tooltips.topbar.undo')}>
            <button
              type="button"
              onClick={onUndo}
              disabled={!canUndo}
              className={`p-2.5 rounded-full transition-all ${!canUndo ? 'text-[var(--text-secondary)]/30 cursor-not-allowed' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-main)]'}`}
            >
              <Undo2 size={18} />
            </button>
          </Tooltip>
          <Tooltip text={t('tooltips.topbar.redo')}>
            <button
              type="button"
              onClick={onRedo}
              disabled={!canRedo}
              className={`p-2.5 rounded-full transition-all ${!canRedo ? 'text-[var(--text-secondary)]/30 cursor-not-allowed' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-main)]'}`}
            >
              <Redo2 size={18} />
            </button>
          </Tooltip>
        </div>

        <Tooltip text={t('tooltips.topbar.save')}>
          <button
            type="button"
            onClick={onSave}
            className="flex items-center gap-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white px-6 py-2.5 rounded-2xl font-bold transition-all shadow-lg shadow-[var(--accent-glow)] active:scale-95"
          >
            <Save size={18} /> {t('topbar.save')}
          </button>
        </Tooltip>
      </div>
    </header>
  );
}
